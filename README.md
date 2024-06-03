# Token bridge tutorial

This is running through the token bridge tutorial off of aztec-packages `master` branch on June 3rd.

## Testing

### Update

Use the latest master build for `aztec-up`:

```bash
VERSION=master aztec-up
```

### Compile

#### Aztec contracts

```bash
cd packages/aztec-contracts/token_bridge
aztec-nargo compile
# the output is already committed in this repo, but you'll have to rerun this if you change anything in the contract
aztec-builder codegen target -o ../../src/test/fixtures
```

#### L1 contracts

```bash
yarn
cd l1-contracts
npx hardhat compile
```

### Run

Run the sandbox

```bash
aztec-sandbox
```

Run the tests

```bash
cd packages/src
yarn
DEBUG='aztec:e2e_uniswap' yarn test
```

### Latest Error

When running through this on a machine with 12 CPUs and 42 GB RAM, I get the following error on the sandbox:

```
aztec-1     | Aztec Server listening on port 8080
aztec-1     | pxe_service Added contract Token at 0x150de3e9064a244b0ff1397248e762be311063b34f995ec30df04548d79b9e69
aztec-1     |
aztec-1     | <--- Last few GCs --->
aztec-1     |
aztec-1     | [1:0x5a95870]    89568 ms: Scavenge 3841.7 (3906.5) -> 3836.1 (3906.5) MB, 13.1 / 0.0 ms  (average mu = 0.503, current mu = 0.414) allocation failure;
aztec-1     | [1:0x5a95870]    89597 ms: Scavenge 3842.4 (3906.5) -> 3837.3 (3908.3) MB, 15.1 / 0.0 ms  (average mu = 0.503, current mu = 0.414) allocation failure;
aztec-1     | [1:0x5a95870]    89627 ms: Scavenge 3843.7 (3908.3) -> 3838.6 (3909.5) MB, 15.7 / 0.0 ms  (average mu = 0.503, current mu = 0.414) allocation failure;
aztec-1     |
aztec-1     |
aztec-1     | <--- JS stacktrace --->
aztec-1     |
aztec-1     | FATAL ERROR: invalid table size Allocation failed - JavaScript heap out of memory
aztec-1     |  1: 0xb95be0 node::Abort() [node]
aztec-1     |  2: 0xa9a7f8  [node]
aztec-1     |  3: 0xd6f5b0 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [node]
aztec-1     |  4: 0xd6f957 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [node]
aztec-1     |  5: 0xf4ceb5  [node]
aztec-1     |  6: 0x11bdafd  [node]
aztec-1     |  7: 0x11bdcd3 v8::internal::Handle<v8::internal::NumberDictionary> v8::internal::HashTable<v8::internal::NumberDictionary, v8::internal::NumberDictionaryShape>::EnsureCapacity<v8::internal::Isolate>(v8::internal::Isolate*, v8::internal::Handle<v8::internal::NumberDictionary>, int, v8::internal::AllocationType) [node]
aztec-1     |  8: 0x11be387 v8::internal::Handle<v8::internal::NumberDictionary> v8::internal::Dictionary<v8::internal::NumberDictionary, v8::internal::NumberDictionaryShape>::Add<v8::internal::Isolate>(v8::internal::Isolate*, v8::internal::Handle<v8::internal::NumberDictionary>, unsigned int, v8::internal::Handle<v8::internal::Object>, v8::internal::PropertyDetails, v8::internal::InternalIndex*) [node]
aztec-1     |  9: 0x10bea08  [node]
aztec-1     | 10: 0x115936d v8::internal::JSObject::AddDataElement(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::Object>, v8::internal::PropertyAttributes) [node]
aztec-1     | 11: 0x11c1ee3 v8::internal::Object::AddDataProperty(v8::internal::LookupIterator*, v8::internal::Handle<v8::internal::Object>, v8::internal::PropertyAttributes, v8::Maybe<v8::internal::ShouldThrow>, v8::internal::StoreOrigin, v8::internal::EnforceDefineSemantics) [node]
aztec-1     | 12: 0x11c2cf6 v8::internal::Object::SetProperty(v8::internal::LookupIterator*, v8::internal::Handle<v8::internal::Object>, v8::internal::StoreOrigin, v8::Maybe<v8::internal::ShouldThrow>) [node]
aztec-1     | 13: 0x12eb105 v8::internal::Runtime::SetObjectProperty(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::StoreOrigin, v8::Maybe<v8::internal::ShouldThrow>) [node]
aztec-1     | 14: 0xff214e v8::internal::Runtime_KeyedStoreIC_Slow(int, unsigned long*, v8::internal::Isolate*) [node]
aztec-1     | 15: 0x170e079  [node]
aztec-1 exited with code 139
```
