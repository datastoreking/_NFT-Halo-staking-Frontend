// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "./OwnerRecovery.sol";
import "./LiquidityPoolManagerImplementationPointer.sol";
import "./WalletObserverImplementationPointer.sol";

contract Halo is ERC20, ERC20Burnable, Ownable, OwnerRecovery, LiquidityPoolManagerImplementationPointer, WalletObserverImplementationPointer {
    address public immutable planetsManager;

    modifier onlyPlanetsManager() {
        address sender = _msgSender();
        require(
            sender == address(planetsManager),
            "Implementations: Not PlanetsManager"
        );
        _;
    }

    constructor(address _planetsManager) ERC20("Halo", "Halo") {
        require(
            _planetsManager != address(0),
            "Implementations: PlanetsManager is not set"
        );
        planetsManager = _planetsManager;
        _mint(owner(), 42_000_000_000 * (10**18));
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, amount);
        if (address(walletObserver) != address(0)) {
            walletObserver.beforeTokenTransfer(_msgSender(), from, to, amount);
        }
    }

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual override {
        super._afterTokenTransfer(from, to, amount);
        if (address(liquidityPoolManager) != address(0)) {
            liquidityPoolManager.afterTokenTransfer(_msgSender());
        }
    }

    function accountBurn(address account, uint256 amount) external onlyPlanetsManager
    {
        // Note: _burn will call _beforeTokenTransfer which will ensure no denied addresses can create cargos
        // effectively protecting PlanetsManager from suspicious addresses
        super._burn(account, amount);
    }

    function accountReward(address account, uint256 amount) external onlyPlanetsManager
    {
        require(
            address(liquidityPoolManager) != account,
            "Astralis: Use liquidityReward to reward liquidity"
        );
        super._mint(account, amount);
    }

    function liquidityReward(uint256 amount) external onlyPlanetsManager {
        require(
            address(liquidityPoolManager) != address(0),
            "Astralis: LiquidityPoolManager is not set"
        );
        super._mint(address(liquidityPoolManager), amount);
    }
}