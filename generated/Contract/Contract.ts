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

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class ContributionCreated extends ethereum.Event {
  get params(): ContributionCreated__Params {
    return new ContributionCreated__Params(this);
  }
}

export class ContributionCreated__Params {
  _event: ContributionCreated;

  constructor(event: ContributionCreated) {
    this._event = event;
  }

  get formID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get contributionCID(): string {
    return this._event.parameters[1].value.toString();
  }

  get contributor(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class FormRequestCreated extends ethereum.Event {
  get params(): FormRequestCreated__Params {
    return new FormRequestCreated__Params(this);
  }
}

export class FormRequestCreated__Params {
  _event: FormRequestCreated;

  constructor(event: FormRequestCreated) {
    this._event = event;
  }

  get formID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get category(): string {
    return this._event.parameters[2].value.toString();
  }

  get formCID(): string {
    return this._event.parameters[3].value.toString();
  }

  get submitionReward(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get mintPrice(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get rewardToken(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get formAdmin(): Address {
    return this._event.parameters[7].value.toAddress();
  }

  get claimGroups(): string {
    return this._event.parameters[8].value.toString();
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

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class TransferBatch extends ethereum.Event {
  get params(): TransferBatch__Params {
    return new TransferBatch__Params(this);
  }
}

export class TransferBatch__Params {
  _event: TransferBatch;

  constructor(event: TransferBatch) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferSingle extends ethereum.Event {
  get params(): TransferSingle__Params {
    return new TransferSingle__Params(this);
  }
}

export class TransferSingle__Params {
  _event: TransferSingle;

  constructor(event: TransferSingle) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class URI extends ethereum.Event {
  get params(): URI__Params {
    return new URI__Params(this);
  }
}

export class URI__Params {
  _event: URI;

  constructor(event: URI) {
    this._event = event;
  }

  get value(): string {
    return this._event.parameters[0].value.toString();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Contract__formRequiredClaimsResult {
  value0: i32;
  value1: Bytes;
  value2: Bytes;
  value3: BigInt;
  value4: boolean;
  value5: boolean;
  value6: Bytes;

  constructor(
    value0: i32,
    value1: Bytes,
    value2: Bytes,
    value3: BigInt,
    value4: boolean,
    value5: boolean,
    value6: Bytes
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set("value1", ethereum.Value.fromFixedBytes(this.value1));
    map.set("value2", ethereum.Value.fromFixedBytes(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    map.set("value6", ethereum.Value.fromBytes(this.value6));
    return map;
  }

  getClaimType(): i32 {
    return this.value0;
  }

  getGroupId(): Bytes {
    return this.value1;
  }

  getGroupTimestamp(): Bytes {
    return this.value2;
  }

  getValue(): BigInt {
    return this.value3;
  }

  getIsOptional(): boolean {
    return this.value4;
  }

  getIsSelectableByUser(): boolean {
    return this.value5;
  }

  getExtraData(): Bytes {
    return this.value6;
  }
}

export class Contract__getFormClaimsResultValue0Struct extends ethereum.Tuple {
  get claimType(): i32 {
    return this[0].toI32();
  }

  get groupId(): Bytes {
    return this[1].toBytes();
  }

  get groupTimestamp(): Bytes {
    return this[2].toBytes();
  }

  get value(): BigInt {
    return this[3].toBigInt();
  }

  get isOptional(): boolean {
    return this[4].toBoolean();
  }

  get isSelectableByUser(): boolean {
    return this[5].toBoolean();
  }

  get extraData(): Bytes {
    return this[6].toBytes();
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  balanceOf(account: Address, id: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address, id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfBatch(accounts: Array<Address>, ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_balanceOfBatch(
    accounts: Array<Address>,
    ids: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  formRequiredClaims(
    param0: BigInt,
    param1: BigInt
  ): Contract__formRequiredClaimsResult {
    let result = super.call(
      "formRequiredClaims",
      "formRequiredClaims(uint256,uint256):(uint8,bytes16,bytes16,uint256,bool,bool,bytes)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new Contract__formRequiredClaimsResult(
      result[0].toI32(),
      result[1].toBytes(),
      result[2].toBytes(),
      result[3].toBigInt(),
      result[4].toBoolean(),
      result[5].toBoolean(),
      result[6].toBytes()
    );
  }

  try_formRequiredClaims(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<Contract__formRequiredClaimsResult> {
    let result = super.tryCall(
      "formRequiredClaims",
      "formRequiredClaims(uint256,uint256):(uint8,bytes16,bytes16,uint256,bool,bool,bytes)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__formRequiredClaimsResult(
        value[0].toI32(),
        value[1].toBytes(),
        value[2].toBytes(),
        value[3].toBigInt(),
        value[4].toBoolean(),
        value[5].toBoolean(),
        value[6].toBytes()
      )
    );
  }

  getFormAdminRole(_formID: BigInt): Bytes {
    let result = super.call(
      "getFormAdminRole",
      "getFormAdminRole(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(_formID)]
    );

    return result[0].toBytes();
  }

  try_getFormAdminRole(_formID: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getFormAdminRole",
      "getFormAdminRole(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(_formID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getFormClaims(
    _formID: BigInt
  ): Array<Contract__getFormClaimsResultValue0Struct> {
    let result = super.call(
      "getFormClaims",
      "getFormClaims(uint256):((uint8,bytes16,bytes16,uint256,bool,bool,bytes)[])",
      [ethereum.Value.fromUnsignedBigInt(_formID)]
    );

    return result[0].toTupleArray<Contract__getFormClaimsResultValue0Struct>();
  }

  try_getFormClaims(
    _formID: BigInt
  ): ethereum.CallResult<Array<Contract__getFormClaimsResultValue0Struct>> {
    let result = super.tryCall(
      "getFormClaims",
      "getFormClaims(uint256):((uint8,bytes16,bytes16,uint256,bool,bool,bytes)[])",
      [ethereum.Value.fromUnsignedBigInt(_formID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Contract__getFormClaimsResultValue0Struct>()
    );
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getUserContributions(user: Address): BigInt {
    let result = super.call(
      "getUserContributions",
      "getUserContributions(address):(uint256)",
      [ethereum.Value.fromAddress(user)]
    );

    return result[0].toBigInt();
  }

  try_getUserContributions(user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getUserContributions",
      "getUserContributions(address):(uint256)",
      [ethereum.Value.fromAddress(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hasAccess(user: Address, _formID: BigInt): boolean {
    let result = super.call("hasAccess", "hasAccess(address,uint256):(bool)", [
      ethereum.Value.fromAddress(user),
      ethereum.Value.fromUnsignedBigInt(_formID)
    ]);

    return result[0].toBoolean();
  }

  try_hasAccess(user: Address, _formID: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "hasAccess",
      "hasAccess(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromUnsignedBigInt(_formID)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isApprovedForAll(account: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    account: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  uri(param0: BigInt): string {
    let result = super.call("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toString();
  }

  try_uri(param0: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
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

  get _sismoVerifier(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _sender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ChangeFormStatusCall extends ethereum.Call {
  get inputs(): ChangeFormStatusCall__Inputs {
    return new ChangeFormStatusCall__Inputs(this);
  }

  get outputs(): ChangeFormStatusCall__Outputs {
    return new ChangeFormStatusCall__Outputs(this);
  }
}

export class ChangeFormStatusCall__Inputs {
  _call: ChangeFormStatusCall;

  constructor(call: ChangeFormStatusCall) {
    this._call = call;
  }

  get _formID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get isMintable(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class ChangeFormStatusCall__Outputs {
  _call: ChangeFormStatusCall;

  constructor(call: ChangeFormStatusCall) {
    this._call = call;
  }
}

export class ChangeTreasuryAddressCall extends ethereum.Call {
  get inputs(): ChangeTreasuryAddressCall__Inputs {
    return new ChangeTreasuryAddressCall__Inputs(this);
  }

  get outputs(): ChangeTreasuryAddressCall__Outputs {
    return new ChangeTreasuryAddressCall__Outputs(this);
  }
}

export class ChangeTreasuryAddressCall__Inputs {
  _call: ChangeTreasuryAddressCall;

  constructor(call: ChangeTreasuryAddressCall) {
    this._call = call;
  }

  get _formID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _newTokenTreasuryAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ChangeTreasuryAddressCall__Outputs {
  _call: ChangeTreasuryAddressCall;

  constructor(call: ChangeTreasuryAddressCall) {
    this._call = call;
  }
}

export class FormContributionCall extends ethereum.Call {
  get inputs(): FormContributionCall__Inputs {
    return new FormContributionCall__Inputs(this);
  }

  get outputs(): FormContributionCall__Outputs {
    return new FormContributionCall__Outputs(this);
  }
}

export class FormContributionCall__Inputs {
  _call: FormContributionCall;

  constructor(call: FormContributionCall) {
    this._call = call;
  }

  get _formID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get proofs(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get contributionCID(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class FormContributionCall__Outputs {
  _call: FormContributionCall;

  constructor(call: FormContributionCall) {
    this._call = call;
  }
}

export class FormRequestCall extends ethereum.Call {
  get inputs(): FormRequestCall__Inputs {
    return new FormRequestCall__Inputs(this);
  }

  get outputs(): FormRequestCall__Outputs {
    return new FormRequestCall__Outputs(this);
  }
}

export class FormRequestCall__Inputs {
  _call: FormRequestCall;

  constructor(call: FormRequestCall) {
    this._call = call;
  }

  get mintPrice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get submitionReward(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get mintable(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }

  get eventMetadata(): FormRequestCallEventMetadataStruct {
    return changetype<FormRequestCallEventMetadataStruct>(
      this._call.inputValues[3].value.toTuple()
    );
  }

  get _claims(): Array<FormRequestCall_claimsStruct> {
    return this._call.inputValues[4].value.toTupleArray<
      FormRequestCall_claimsStruct
    >();
  }
}

export class FormRequestCall__Outputs {
  _call: FormRequestCall;

  constructor(call: FormRequestCall) {
    this._call = call;
  }
}

export class FormRequestCallEventMetadataStruct extends ethereum.Tuple {
  get formCID(): string {
    return this[0].toString();
  }

  get name(): string {
    return this[1].toString();
  }

  get category(): string {
    return this[2].toString();
  }

  get claimsGroups(): string {
    return this[3].toString();
  }
}

export class FormRequestCall_claimsStruct extends ethereum.Tuple {
  get claimType(): i32 {
    return this[0].toI32();
  }

  get groupId(): Bytes {
    return this[1].toBytes();
  }

  get groupTimestamp(): Bytes {
    return this[2].toBytes();
  }

  get value(): BigInt {
    return this[3].toBigInt();
  }

  get isOptional(): boolean {
    return this[4].toBoolean();
  }

  get isSelectableByUser(): boolean {
    return this[5].toBoolean();
  }

  get extraData(): Bytes {
    return this[6].toBytes();
  }
}

export class FormRequestERC20Call extends ethereum.Call {
  get inputs(): FormRequestERC20Call__Inputs {
    return new FormRequestERC20Call__Inputs(this);
  }

  get outputs(): FormRequestERC20Call__Outputs {
    return new FormRequestERC20Call__Outputs(this);
  }
}

export class FormRequestERC20Call__Inputs {
  _call: FormRequestERC20Call;

  constructor(call: FormRequestERC20Call) {
    this._call = call;
  }

  get mintPrice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get submitionReward(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get valueTransferAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get tokenTreasury(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get mintable(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }

  get rewardToken(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get eventMetadata(): FormRequestERC20CallEventMetadataStruct {
    return changetype<FormRequestERC20CallEventMetadataStruct>(
      this._call.inputValues[6].value.toTuple()
    );
  }

  get _claims(): Array<FormRequestERC20Call_claimsStruct> {
    return this._call.inputValues[7].value.toTupleArray<
      FormRequestERC20Call_claimsStruct
    >();
  }
}

export class FormRequestERC20Call__Outputs {
  _call: FormRequestERC20Call;

  constructor(call: FormRequestERC20Call) {
    this._call = call;
  }
}

export class FormRequestERC20CallEventMetadataStruct extends ethereum.Tuple {
  get formCID(): string {
    return this[0].toString();
  }

  get name(): string {
    return this[1].toString();
  }

  get category(): string {
    return this[2].toString();
  }

  get claimsGroups(): string {
    return this[3].toString();
  }
}

export class FormRequestERC20Call_claimsStruct extends ethereum.Tuple {
  get claimType(): i32 {
    return this[0].toI32();
  }

  get groupId(): Bytes {
    return this[1].toBytes();
  }

  get groupTimestamp(): Bytes {
    return this[2].toBytes();
  }

  get value(): BigInt {
    return this[3].toBigInt();
  }

  get isOptional(): boolean {
    return this[4].toBoolean();
  }

  get isSelectableByUser(): boolean {
    return this[5].toBoolean();
  }

  get extraData(): Bytes {
    return this[6].toBytes();
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
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

  get _formID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
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

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class SafeBatchTransferFromCall extends ethereum.Call {
  get inputs(): SafeBatchTransferFromCall__Inputs {
    return new SafeBatchTransferFromCall__Inputs(this);
  }

  get outputs(): SafeBatchTransferFromCall__Outputs {
    return new SafeBatchTransferFromCall__Outputs(this);
  }
}

export class SafeBatchTransferFromCall__Inputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeBatchTransferFromCall__Outputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
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
