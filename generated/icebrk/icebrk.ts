// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BetBear extends ethereum.Event {
  get params(): BetBear__Params {
    return new BetBear__Params(this);
  }
}

export class BetBear__Params {
  _event: BetBear;

  constructor(event: BetBear) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get currentEpoch(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class BetBull extends ethereum.Event {
  get params(): BetBull__Params {
    return new BetBull__Params(this);
  }
}

export class BetBull__Params {
  _event: BetBull;

  constructor(event: BetBull) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get currentEpoch(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Claim extends ethereum.Event {
  get params(): Claim__Params {
    return new Claim__Params(this);
  }
}

export class Claim__Params {
  _event: Claim;

  constructor(event: Claim) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get currentEpoch(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ClaimTreasury extends ethereum.Event {
  get params(): ClaimTreasury__Params {
    return new ClaimTreasury__Params(this);
  }
}

export class ClaimTreasury__Params {
  _event: ClaimTreasury;

  constructor(event: ClaimTreasury) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class EndRound extends ethereum.Event {
  get params(): EndRound__Params {
    return new EndRound__Params(this);
  }
}

export class EndRound__Params {
  _event: EndRound;

  constructor(event: EndRound) {
    this._event = event;
  }

  get epoch(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get blockNumber(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class LockRound extends ethereum.Event {
  get params(): LockRound__Params {
    return new LockRound__Params(this);
  }
}

export class LockRound__Params {
  _event: LockRound;

  constructor(event: LockRound) {
    this._event = event;
  }

  get epoch(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get blockNumber(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MinBetAmountUpdated extends ethereum.Event {
  get params(): MinBetAmountUpdated__Params {
    return new MinBetAmountUpdated__Params(this);
  }
}

export class MinBetAmountUpdated__Params {
  _event: MinBetAmountUpdated;

  constructor(event: MinBetAmountUpdated) {
    this._event = event;
  }

  get epoch(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get minBetAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Pause extends ethereum.Event {
  get params(): Pause__Params {
    return new Pause__Params(this);
  }
}

export class Pause__Params {
  _event: Pause;

  constructor(event: Pause) {
    this._event = event;
  }

  get epoch(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RatesUpdated extends ethereum.Event {
  get params(): RatesUpdated__Params {
    return new RatesUpdated__Params(this);
  }
}

export class RatesUpdated__Params {
  _event: RatesUpdated;

  constructor(event: RatesUpdated) {
    this._event = event;
  }

  get epoch(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get rewardRate(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get treasuryRate(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RewardsCalculated extends ethereum.Event {
  get params(): RewardsCalculated__Params {
    return new RewardsCalculated__Params(this);
  }
}

export class RewardsCalculated__Params {
  _event: RewardsCalculated;

  constructor(event: RewardsCalculated) {
    this._event = event;
  }

  get epoch(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get rewardBaseCalAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get rewardAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get treasuryAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class StartRound extends ethereum.Event {
  get params(): StartRound__Params {
    return new StartRound__Params(this);
  }
}

export class StartRound__Params {
  _event: StartRound;

  constructor(event: StartRound) {
    this._event = event;
  }

  get epoch(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get blockNumber(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Unpause extends ethereum.Event {
  get params(): Unpause__Params {
    return new Unpause__Params(this);
  }
}

export class Unpause__Params {
  _event: Unpause;

  constructor(event: Unpause) {
    this._event = event;
  }

  get epoch(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class icebrk__getUserRoundsResult {
  value0: Array<BigInt>;
  value1: BigInt;

  constructor(value0: Array<BigInt>, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigIntArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class icebrk__ledgerResult {
  value0: i32;
  value1: BigInt;
  value2: boolean;

  constructor(value0: i32, value1: BigInt, value2: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    return map;
  }
}

export class icebrk__roundsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: BigInt;
  value9: BigInt;
  value10: BigInt;
  value11: boolean;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: BigInt,
    value9: BigInt,
    value10: BigInt,
    value11: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
    this.value11 = value11;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromSignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromSignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    map.set("value9", ethereum.Value.fromUnsignedBigInt(this.value9));
    map.set("value10", ethereum.Value.fromUnsignedBigInt(this.value10));
    map.set("value11", ethereum.Value.fromBoolean(this.value11));
    return map;
  }
}

export class icebrk extends ethereum.SmartContract {
  static bind(address: Address): icebrk {
    return new icebrk("icebrk", address);
  }

  TOTAL_RATE(): BigInt {
    let result = super.call("TOTAL_RATE", "TOTAL_RATE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_TOTAL_RATE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("TOTAL_RATE", "TOTAL_RATE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  adminAddress(): Address {
    let result = super.call("adminAddress", "adminAddress():(address)", []);

    return result[0].toAddress();
  }

  try_adminAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("adminAddress", "adminAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  bufferBlocks(): BigInt {
    let result = super.call("bufferBlocks", "bufferBlocks():(uint256)", []);

    return result[0].toBigInt();
  }

  try_bufferBlocks(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("bufferBlocks", "bufferBlocks():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  claimable(epoch: BigInt, user: Address): boolean {
    let result = super.call("claimable", "claimable(uint256,address):(bool)", [
      ethereum.Value.fromUnsignedBigInt(epoch),
      ethereum.Value.fromAddress(user)
    ]);

    return result[0].toBoolean();
  }

  try_claimable(epoch: BigInt, user: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "claimable",
      "claimable(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(epoch),
        ethereum.Value.fromAddress(user)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  currentEpoch(): BigInt {
    let result = super.call("currentEpoch", "currentEpoch():(uint256)", []);

    return result[0].toBigInt();
  }

  try_currentEpoch(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("currentEpoch", "currentEpoch():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  genesisLockOnce(): boolean {
    let result = super.call("genesisLockOnce", "genesisLockOnce():(bool)", []);

    return result[0].toBoolean();
  }

  try_genesisLockOnce(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "genesisLockOnce",
      "genesisLockOnce():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  genesisStartOnce(): boolean {
    let result = super.call(
      "genesisStartOnce",
      "genesisStartOnce():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_genesisStartOnce(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "genesisStartOnce",
      "genesisStartOnce():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getUserRounds(
    user: Address,
    cursor: BigInt,
    size: BigInt
  ): icebrk__getUserRoundsResult {
    let result = super.call(
      "getUserRounds",
      "getUserRounds(address,uint256,uint256):(uint256[],uint256)",
      [
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromUnsignedBigInt(cursor),
        ethereum.Value.fromUnsignedBigInt(size)
      ]
    );

    return new icebrk__getUserRoundsResult(
      result[0].toBigIntArray(),
      result[1].toBigInt()
    );
  }

  try_getUserRounds(
    user: Address,
    cursor: BigInt,
    size: BigInt
  ): ethereum.CallResult<icebrk__getUserRoundsResult> {
    let result = super.tryCall(
      "getUserRounds",
      "getUserRounds(address,uint256,uint256):(uint256[],uint256)",
      [
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromUnsignedBigInt(cursor),
        ethereum.Value.fromUnsignedBigInt(size)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new icebrk__getUserRoundsResult(
        value[0].toBigIntArray(),
        value[1].toBigInt()
      )
    );
  }

  intervalBlocks(): BigInt {
    let result = super.call("intervalBlocks", "intervalBlocks():(uint256)", []);

    return result[0].toBigInt();
  }

  try_intervalBlocks(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "intervalBlocks",
      "intervalBlocks():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ledger(param0: BigInt, param1: Address): icebrk__ledgerResult {
    let result = super.call(
      "ledger",
      "ledger(uint256,address):(uint8,uint256,bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );

    return new icebrk__ledgerResult(
      result[0].toI32(),
      result[1].toBigInt(),
      result[2].toBoolean()
    );
  }

  try_ledger(
    param0: BigInt,
    param1: Address
  ): ethereum.CallResult<icebrk__ledgerResult> {
    let result = super.tryCall(
      "ledger",
      "ledger(uint256,address):(uint8,uint256,bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new icebrk__ledgerResult(
        value[0].toI32(),
        value[1].toBigInt(),
        value[2].toBoolean()
      )
    );
  }

  minBetAmount(): BigInt {
    let result = super.call("minBetAmount", "minBetAmount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_minBetAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("minBetAmount", "minBetAmount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  operatorAddress(): Address {
    let result = super.call(
      "operatorAddress",
      "operatorAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_operatorAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "operatorAddress",
      "operatorAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  oracleLatestRoundId(): BigInt {
    let result = super.call(
      "oracleLatestRoundId",
      "oracleLatestRoundId():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_oracleLatestRoundId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "oracleLatestRoundId",
      "oracleLatestRoundId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  oracleUpdateAllowance(): BigInt {
    let result = super.call(
      "oracleUpdateAllowance",
      "oracleUpdateAllowance():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_oracleUpdateAllowance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "oracleUpdateAllowance",
      "oracleUpdateAllowance():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  refundable(epoch: BigInt, user: Address): boolean {
    let result = super.call(
      "refundable",
      "refundable(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(epoch),
        ethereum.Value.fromAddress(user)
      ]
    );

    return result[0].toBoolean();
  }

  try_refundable(epoch: BigInt, user: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "refundable",
      "refundable(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(epoch),
        ethereum.Value.fromAddress(user)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  rewardRate(): BigInt {
    let result = super.call("rewardRate", "rewardRate():(uint256)", []);

    return result[0].toBigInt();
  }

  try_rewardRate(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("rewardRate", "rewardRate():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rounds(param0: BigInt): icebrk__roundsResult {
    let result = super.call(
      "rounds",
      "rounds(uint256):(uint256,uint256,uint256,uint256,int256,int256,uint256,uint256,uint256,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new icebrk__roundsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBigInt(),
      result[9].toBigInt(),
      result[10].toBigInt(),
      result[11].toBoolean()
    );
  }

  try_rounds(param0: BigInt): ethereum.CallResult<icebrk__roundsResult> {
    let result = super.tryCall(
      "rounds",
      "rounds(uint256):(uint256,uint256,uint256,uint256,int256,int256,uint256,uint256,uint256,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new icebrk__roundsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBigInt(),
        value[9].toBigInt(),
        value[10].toBigInt(),
        value[11].toBoolean()
      )
    );
  }

  treasuryAmount(): BigInt {
    let result = super.call("treasuryAmount", "treasuryAmount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_treasuryAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "treasuryAmount",
      "treasuryAmount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  treasuryRate(): BigInt {
    let result = super.call("treasuryRate", "treasuryRate():(uint256)", []);

    return result[0].toBigInt();
  }

  try_treasuryRate(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("treasuryRate", "treasuryRate():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userRounds(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "userRounds",
      "userRounds(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_userRounds(param0: Address, param1: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "userRounds",
      "userRounds(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _oracle(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _adminAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _operatorAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _intervalBlocks(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _bufferBlocks(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _minBetAmount(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _oracleUpdateAllowance(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BetBearCall extends ethereum.Call {
  get inputs(): BetBearCall__Inputs {
    return new BetBearCall__Inputs(this);
  }

  get outputs(): BetBearCall__Outputs {
    return new BetBearCall__Outputs(this);
  }
}

export class BetBearCall__Inputs {
  _call: BetBearCall;

  constructor(call: BetBearCall) {
    this._call = call;
  }
}

export class BetBearCall__Outputs {
  _call: BetBearCall;

  constructor(call: BetBearCall) {
    this._call = call;
  }
}

export class BetBullCall extends ethereum.Call {
  get inputs(): BetBullCall__Inputs {
    return new BetBullCall__Inputs(this);
  }

  get outputs(): BetBullCall__Outputs {
    return new BetBullCall__Outputs(this);
  }
}

export class BetBullCall__Inputs {
  _call: BetBullCall;

  constructor(call: BetBullCall) {
    this._call = call;
  }
}

export class BetBullCall__Outputs {
  _call: BetBullCall;

  constructor(call: BetBullCall) {
    this._call = call;
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }

  get epoch(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class ClaimTreasuryCall extends ethereum.Call {
  get inputs(): ClaimTreasuryCall__Inputs {
    return new ClaimTreasuryCall__Inputs(this);
  }

  get outputs(): ClaimTreasuryCall__Outputs {
    return new ClaimTreasuryCall__Outputs(this);
  }
}

export class ClaimTreasuryCall__Inputs {
  _call: ClaimTreasuryCall;

  constructor(call: ClaimTreasuryCall) {
    this._call = call;
  }
}

export class ClaimTreasuryCall__Outputs {
  _call: ClaimTreasuryCall;

  constructor(call: ClaimTreasuryCall) {
    this._call = call;
  }
}

export class ExecuteRoundCall extends ethereum.Call {
  get inputs(): ExecuteRoundCall__Inputs {
    return new ExecuteRoundCall__Inputs(this);
  }

  get outputs(): ExecuteRoundCall__Outputs {
    return new ExecuteRoundCall__Outputs(this);
  }
}

export class ExecuteRoundCall__Inputs {
  _call: ExecuteRoundCall;

  constructor(call: ExecuteRoundCall) {
    this._call = call;
  }
}

export class ExecuteRoundCall__Outputs {
  _call: ExecuteRoundCall;

  constructor(call: ExecuteRoundCall) {
    this._call = call;
  }
}

export class GenesisLockRoundCall extends ethereum.Call {
  get inputs(): GenesisLockRoundCall__Inputs {
    return new GenesisLockRoundCall__Inputs(this);
  }

  get outputs(): GenesisLockRoundCall__Outputs {
    return new GenesisLockRoundCall__Outputs(this);
  }
}

export class GenesisLockRoundCall__Inputs {
  _call: GenesisLockRoundCall;

  constructor(call: GenesisLockRoundCall) {
    this._call = call;
  }
}

export class GenesisLockRoundCall__Outputs {
  _call: GenesisLockRoundCall;

  constructor(call: GenesisLockRoundCall) {
    this._call = call;
  }
}

export class GenesisStartRoundCall extends ethereum.Call {
  get inputs(): GenesisStartRoundCall__Inputs {
    return new GenesisStartRoundCall__Inputs(this);
  }

  get outputs(): GenesisStartRoundCall__Outputs {
    return new GenesisStartRoundCall__Outputs(this);
  }
}

export class GenesisStartRoundCall__Inputs {
  _call: GenesisStartRoundCall;

  constructor(call: GenesisStartRoundCall) {
    this._call = call;
  }
}

export class GenesisStartRoundCall__Outputs {
  _call: GenesisStartRoundCall;

  constructor(call: GenesisStartRoundCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetAdminCall extends ethereum.Call {
  get inputs(): SetAdminCall__Inputs {
    return new SetAdminCall__Inputs(this);
  }

  get outputs(): SetAdminCall__Outputs {
    return new SetAdminCall__Outputs(this);
  }
}

export class SetAdminCall__Inputs {
  _call: SetAdminCall;

  constructor(call: SetAdminCall) {
    this._call = call;
  }

  get _adminAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetAdminCall__Outputs {
  _call: SetAdminCall;

  constructor(call: SetAdminCall) {
    this._call = call;
  }
}

export class SetBufferBlocksCall extends ethereum.Call {
  get inputs(): SetBufferBlocksCall__Inputs {
    return new SetBufferBlocksCall__Inputs(this);
  }

  get outputs(): SetBufferBlocksCall__Outputs {
    return new SetBufferBlocksCall__Outputs(this);
  }
}

export class SetBufferBlocksCall__Inputs {
  _call: SetBufferBlocksCall;

  constructor(call: SetBufferBlocksCall) {
    this._call = call;
  }

  get _bufferBlocks(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetBufferBlocksCall__Outputs {
  _call: SetBufferBlocksCall;

  constructor(call: SetBufferBlocksCall) {
    this._call = call;
  }
}

export class SetIntervalBlocksCall extends ethereum.Call {
  get inputs(): SetIntervalBlocksCall__Inputs {
    return new SetIntervalBlocksCall__Inputs(this);
  }

  get outputs(): SetIntervalBlocksCall__Outputs {
    return new SetIntervalBlocksCall__Outputs(this);
  }
}

export class SetIntervalBlocksCall__Inputs {
  _call: SetIntervalBlocksCall;

  constructor(call: SetIntervalBlocksCall) {
    this._call = call;
  }

  get _intervalBlocks(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetIntervalBlocksCall__Outputs {
  _call: SetIntervalBlocksCall;

  constructor(call: SetIntervalBlocksCall) {
    this._call = call;
  }
}

export class SetMinBetAmountCall extends ethereum.Call {
  get inputs(): SetMinBetAmountCall__Inputs {
    return new SetMinBetAmountCall__Inputs(this);
  }

  get outputs(): SetMinBetAmountCall__Outputs {
    return new SetMinBetAmountCall__Outputs(this);
  }
}

export class SetMinBetAmountCall__Inputs {
  _call: SetMinBetAmountCall;

  constructor(call: SetMinBetAmountCall) {
    this._call = call;
  }

  get _minBetAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMinBetAmountCall__Outputs {
  _call: SetMinBetAmountCall;

  constructor(call: SetMinBetAmountCall) {
    this._call = call;
  }
}

export class SetOperatorCall extends ethereum.Call {
  get inputs(): SetOperatorCall__Inputs {
    return new SetOperatorCall__Inputs(this);
  }

  get outputs(): SetOperatorCall__Outputs {
    return new SetOperatorCall__Outputs(this);
  }
}

export class SetOperatorCall__Inputs {
  _call: SetOperatorCall;

  constructor(call: SetOperatorCall) {
    this._call = call;
  }

  get _operatorAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOperatorCall__Outputs {
  _call: SetOperatorCall;

  constructor(call: SetOperatorCall) {
    this._call = call;
  }
}

export class SetOracleCall extends ethereum.Call {
  get inputs(): SetOracleCall__Inputs {
    return new SetOracleCall__Inputs(this);
  }

  get outputs(): SetOracleCall__Outputs {
    return new SetOracleCall__Outputs(this);
  }
}

export class SetOracleCall__Inputs {
  _call: SetOracleCall;

  constructor(call: SetOracleCall) {
    this._call = call;
  }

  get _oracle(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOracleCall__Outputs {
  _call: SetOracleCall;

  constructor(call: SetOracleCall) {
    this._call = call;
  }
}

export class SetOracleUpdateAllowanceCall extends ethereum.Call {
  get inputs(): SetOracleUpdateAllowanceCall__Inputs {
    return new SetOracleUpdateAllowanceCall__Inputs(this);
  }

  get outputs(): SetOracleUpdateAllowanceCall__Outputs {
    return new SetOracleUpdateAllowanceCall__Outputs(this);
  }
}

export class SetOracleUpdateAllowanceCall__Inputs {
  _call: SetOracleUpdateAllowanceCall;

  constructor(call: SetOracleUpdateAllowanceCall) {
    this._call = call;
  }

  get _oracleUpdateAllowance(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetOracleUpdateAllowanceCall__Outputs {
  _call: SetOracleUpdateAllowanceCall;

  constructor(call: SetOracleUpdateAllowanceCall) {
    this._call = call;
  }
}

export class SetRewardRateCall extends ethereum.Call {
  get inputs(): SetRewardRateCall__Inputs {
    return new SetRewardRateCall__Inputs(this);
  }

  get outputs(): SetRewardRateCall__Outputs {
    return new SetRewardRateCall__Outputs(this);
  }
}

export class SetRewardRateCall__Inputs {
  _call: SetRewardRateCall;

  constructor(call: SetRewardRateCall) {
    this._call = call;
  }

  get _rewardRate(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetRewardRateCall__Outputs {
  _call: SetRewardRateCall;

  constructor(call: SetRewardRateCall) {
    this._call = call;
  }
}

export class SetTreasuryRateCall extends ethereum.Call {
  get inputs(): SetTreasuryRateCall__Inputs {
    return new SetTreasuryRateCall__Inputs(this);
  }

  get outputs(): SetTreasuryRateCall__Outputs {
    return new SetTreasuryRateCall__Outputs(this);
  }
}

export class SetTreasuryRateCall__Inputs {
  _call: SetTreasuryRateCall;

  constructor(call: SetTreasuryRateCall) {
    this._call = call;
  }

  get _treasuryRate(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetTreasuryRateCall__Outputs {
  _call: SetTreasuryRateCall;

  constructor(call: SetTreasuryRateCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}
