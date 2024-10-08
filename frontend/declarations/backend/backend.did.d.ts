import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'flipCoin' : ActorMethod<[], string>,
  'getHeadsImage' : ActorMethod<[], [] | [Uint8Array | number[]]>,
  'getTailsImage' : ActorMethod<[], [] | [Uint8Array | number[]]>,
  'uploadHeadsImage' : ActorMethod<[Uint8Array | number[]], undefined>,
  'uploadTailsImage' : ActorMethod<[Uint8Array | number[]], undefined>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
