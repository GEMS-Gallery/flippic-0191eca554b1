export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'flipCoin' : IDL.Func([], [IDL.Text], []),
    'getHeadsImage' : IDL.Func([], [IDL.Opt(IDL.Vec(IDL.Nat8))], ['query']),
    'getTailsImage' : IDL.Func([], [IDL.Opt(IDL.Vec(IDL.Nat8))], ['query']),
    'uploadHeadsImage' : IDL.Func([IDL.Vec(IDL.Nat8)], [], []),
    'uploadTailsImage' : IDL.Func([IDL.Vec(IDL.Nat8)], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
