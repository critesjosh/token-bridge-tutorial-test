# L1 Contracts

## Dependencies

```bash
curl -L https://foundry.paradigm.xyz | bash
```

## Install

```bash
# Install OpenZeppelin
forge install OpenZeppelin/openzeppelin-contracts --no-commit

# Install Aztec packages
forge install AztecProtocol/aztec-packages@aztec-packages-v0.67.1 --no-commit
```

## Copy Portal

```bash
cp lib/aztec-packages/l1-contracts/test/portals/TokenPortal.sol src/TokenPortal.sol
```

## Compile

```bash
forge build
```
