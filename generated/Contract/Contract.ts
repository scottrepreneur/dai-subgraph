// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class Approval extends EthereumEvent {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get src(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get guy(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get wad(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class LogNote extends EthereumEvent {
  get params(): LogNote__Params {
    return new LogNote__Params(this);
  }
}

export class LogNote__Params {
  _event: LogNote;

  constructor(event: LogNote) {
    this._event = event;
  }

  get sig(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get usr(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get arg1(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get arg2(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get data(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class Transfer extends EthereumEvent {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get src(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get dst(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get wad(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Contract extends SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  DOMAIN_SEPARATOR(): Bytes {
    let result = super.call("DOMAIN_SEPARATOR", []);

    return result[0].toBytes();
  }

  try_DOMAIN_SEPARATOR(): CallResult<Bytes> {
    let result = super.tryCall("DOMAIN_SEPARATOR", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  PERMIT_TYPEHASH(): Bytes {
    let result = super.call("PERMIT_TYPEHASH", []);

    return result[0].toBytes();
  }

  try_PERMIT_TYPEHASH(): CallResult<Bytes> {
    let result = super.tryCall("PERMIT_TYPEHASH", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  allowance(param0: Address, param1: Address): BigInt {
    let result = super.call("allowance", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromAddress(param1)
    ]);

    return result[0].toBigInt();
  }

  try_allowance(param0: Address, param1: Address): CallResult<BigInt> {
    let result = super.tryCall("allowance", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromAddress(param1)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  approve(usr: Address, wad: BigInt): boolean {
    let result = super.call("approve", [
      EthereumValue.fromAddress(usr),
      EthereumValue.fromUnsignedBigInt(wad)
    ]);

    return result[0].toBoolean();
  }

  try_approve(usr: Address, wad: BigInt): CallResult<boolean> {
    let result = super.tryCall("approve", [
      EthereumValue.fromAddress(usr),
      EthereumValue.fromUnsignedBigInt(wad)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(param0: Address): BigInt {
    let result = super.call("balanceOf", [EthereumValue.fromAddress(param0)]);

    return result[0].toBigInt();
  }

  try_balanceOf(param0: Address): CallResult<BigInt> {
    let result = super.tryCall("balanceOf", [
      EthereumValue.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", []);

    return result[0].toI32();
  }

  try_decimals(): CallResult<i32> {
    let result = super.tryCall("decimals", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toI32());
  }

  name(): string {
    let result = super.call("name", []);

    return result[0].toString();
  }

  try_name(): CallResult<string> {
    let result = super.tryCall("name", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toString());
  }

  nonces(param0: Address): BigInt {
    let result = super.call("nonces", [EthereumValue.fromAddress(param0)]);

    return result[0].toBigInt();
  }

  try_nonces(param0: Address): CallResult<BigInt> {
    let result = super.tryCall("nonces", [EthereumValue.fromAddress(param0)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  symbol(): string {
    let result = super.call("symbol", []);

    return result[0].toString();
  }

  try_symbol(): CallResult<string> {
    let result = super.tryCall("symbol", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): CallResult<BigInt> {
    let result = super.tryCall("totalSupply", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  transfer(dst: Address, wad: BigInt): boolean {
    let result = super.call("transfer", [
      EthereumValue.fromAddress(dst),
      EthereumValue.fromUnsignedBigInt(wad)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(dst: Address, wad: BigInt): CallResult<boolean> {
    let result = super.tryCall("transfer", [
      EthereumValue.fromAddress(dst),
      EthereumValue.fromUnsignedBigInt(wad)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(src: Address, dst: Address, wad: BigInt): boolean {
    let result = super.call("transferFrom", [
      EthereumValue.fromAddress(src),
      EthereumValue.fromAddress(dst),
      EthereumValue.fromUnsignedBigInt(wad)
    ]);

    return result[0].toBoolean();
  }

  try_transferFrom(
    src: Address,
    dst: Address,
    wad: BigInt
  ): CallResult<boolean> {
    let result = super.tryCall("transferFrom", [
      EthereumValue.fromAddress(src),
      EthereumValue.fromAddress(dst),
      EthereumValue.fromUnsignedBigInt(wad)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  version(): string {
    let result = super.call("version", []);

    return result[0].toString();
  }

  try_version(): CallResult<string> {
    let result = super.tryCall("version", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toString());
  }

  wards(param0: Address): BigInt {
    let result = super.call("wards", [EthereumValue.fromAddress(param0)]);

    return result[0].toBigInt();
  }

  try_wards(param0: Address): CallResult<BigInt> {
    let result = super.tryCall("wards", [EthereumValue.fromAddress(param0)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends EthereumCall {
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

  get chainId_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends EthereumCall {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get usr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class BurnCall extends EthereumCall {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get usr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }
}

export class DenyCall extends EthereumCall {
  get inputs(): DenyCall__Inputs {
    return new DenyCall__Inputs(this);
  }

  get outputs(): DenyCall__Outputs {
    return new DenyCall__Outputs(this);
  }
}

export class DenyCall__Inputs {
  _call: DenyCall;

  constructor(call: DenyCall) {
    this._call = call;
  }

  get guy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DenyCall__Outputs {
  _call: DenyCall;

  constructor(call: DenyCall) {
    this._call = call;
  }
}

export class MintCall extends EthereumCall {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get usr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class MoveCall extends EthereumCall {
  get inputs(): MoveCall__Inputs {
    return new MoveCall__Inputs(this);
  }

  get outputs(): MoveCall__Outputs {
    return new MoveCall__Outputs(this);
  }
}

export class MoveCall__Inputs {
  _call: MoveCall;

  constructor(call: MoveCall) {
    this._call = call;
  }

  get src(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get dst(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class MoveCall__Outputs {
  _call: MoveCall;

  constructor(call: MoveCall) {
    this._call = call;
  }
}

export class PermitCall extends EthereumCall {
  get inputs(): PermitCall__Inputs {
    return new PermitCall__Inputs(this);
  }

  get outputs(): PermitCall__Outputs {
    return new PermitCall__Outputs(this);
  }
}

export class PermitCall__Inputs {
  _call: PermitCall;

  constructor(call: PermitCall) {
    this._call = call;
  }

  get holder(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get spender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get nonce(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get expiry(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get allowed(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }

  get v(): i32 {
    return this._call.inputValues[5].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }
}

export class PermitCall__Outputs {
  _call: PermitCall;

  constructor(call: PermitCall) {
    this._call = call;
  }
}

export class PullCall extends EthereumCall {
  get inputs(): PullCall__Inputs {
    return new PullCall__Inputs(this);
  }

  get outputs(): PullCall__Outputs {
    return new PullCall__Outputs(this);
  }
}

export class PullCall__Inputs {
  _call: PullCall;

  constructor(call: PullCall) {
    this._call = call;
  }

  get usr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class PullCall__Outputs {
  _call: PullCall;

  constructor(call: PullCall) {
    this._call = call;
  }
}

export class PushCall extends EthereumCall {
  get inputs(): PushCall__Inputs {
    return new PushCall__Inputs(this);
  }

  get outputs(): PushCall__Outputs {
    return new PushCall__Outputs(this);
  }
}

export class PushCall__Inputs {
  _call: PushCall;

  constructor(call: PushCall) {
    this._call = call;
  }

  get usr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class PushCall__Outputs {
  _call: PushCall;

  constructor(call: PushCall) {
    this._call = call;
  }
}

export class RelyCall extends EthereumCall {
  get inputs(): RelyCall__Inputs {
    return new RelyCall__Inputs(this);
  }

  get outputs(): RelyCall__Outputs {
    return new RelyCall__Outputs(this);
  }
}

export class RelyCall__Inputs {
  _call: RelyCall;

  constructor(call: RelyCall) {
    this._call = call;
  }

  get guy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RelyCall__Outputs {
  _call: RelyCall;

  constructor(call: RelyCall) {
    this._call = call;
  }
}

export class TransferCall extends EthereumCall {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get dst(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends EthereumCall {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get src(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get dst(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
