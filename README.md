# Token bridge tutorial

WIP to get working with aztec v 0.67.0

## Requirements

- node.js version 18.x.x
- Aztec sandbox, install with:

```bash
bash -i <(curl -s install.aztec.network)
```

### Compile

#### Aztec contracts

```bash
cd packages/aztec-contracts/token_bridge_contract
aztec-nargo compile
# the output is already committed in this repo, but you'll have to rerun this if you change anything in the contract
aztec codegen target -o ../../src/test/fixtures
```

#### L1 contracts

- Install foundry

```bash
curl -L https://foundry.paradigm.xyz | bash
```

- Compile

```bash
cd packages/l1-contracts-forge
forge build
```

## Updated

1. Set up L1 contracts
   1. copy `TestERC20.sol` to `packages/l1-contracts/src/`
   2. `cp packages/l1-contracts/lib/aztec-packages/l1-contracts/src/mock/TestERC20.sol packages/l1-contracts/src/`
      1. TODO: update [this](packages/l1-contracts/lib/aztec-packages/l1-contracts/src/mock/TestERC20.sol) line to use `@aztec/governance/interfaces/IMintableERC20.sol` in the monorepo
   3.
2. Set up Aztec contracts
   1. `cp packages/l1-contracts/lib/aztec-packages/noir-projects/noir-contracts/contracts/ packages/aztec-contracts/ -r`
   2. Replace `Nargo.toml` with a Nargo.toml that points to the correct versions of the packages
