const KingOfTheHillABI = [
  {
    inputs: [
      {
        internalType: "contract ISuperToken",
        name: "_cashToken",
        type: "address",
      },
      {
        internalType: "contract ISuperToken",
        name: "_armyToken",
        type: "address",
      },
      { internalType: "int96", name: "_decay", type: "int96" },
      { internalType: "uint256", name: "_step", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "UnauthorizedHost", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int96",
        name: "armyFlowRate",
        type: "int96",
      },
    ],
    name: "BuildingArmy",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "king",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "army",
        type: "uint256",
      },
    ],
    name: "HailNewKing",
    type: "event",
  },
  {
    inputs: [],
    name: "_host",
    outputs: [
      { internalType: "contract ISuperfluid", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperToken",
        name: "superToken",
        type: "address",
      },
      { internalType: "address", name: "agreementClass", type: "address" },
      { internalType: "bytes32", name: "", type: "bytes32" },
      { internalType: "bytes", name: "agreementData", type: "bytes" },
      { internalType: "bytes", name: "cbdata", type: "bytes" },
      { internalType: "bytes", name: "ctx", type: "bytes" },
    ],
    name: "afterAgreementCreated",
    outputs: [{ internalType: "bytes", name: "newCtx", type: "bytes" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperToken",
        name: "superToken",
        type: "address",
      },
      { internalType: "address", name: "agreementClass", type: "address" },
      { internalType: "bytes32", name: "", type: "bytes32" },
      { internalType: "bytes", name: "agreementData", type: "bytes" },
      { internalType: "bytes", name: "cbdata", type: "bytes" },
      { internalType: "bytes", name: "ctx", type: "bytes" },
    ],
    name: "afterAgreementTerminated",
    outputs: [{ internalType: "bytes", name: "newCtx", type: "bytes" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperToken",
        name: "superToken",
        type: "address",
      },
      { internalType: "address", name: "agreementClass", type: "address" },
      { internalType: "bytes32", name: "", type: "bytes32" },
      { internalType: "bytes", name: "agreementData", type: "bytes" },
      { internalType: "bytes", name: "cbdata", type: "bytes" },
      { internalType: "bytes", name: "ctx", type: "bytes" },
    ],
    name: "afterAgreementUpdated",
    outputs: [{ internalType: "bytes", name: "newCtx", type: "bytes" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "army",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "int96", name: "cashFlowRate", type: "int96" }],
    name: "armyFlowRate",
    outputs: [{ internalType: "int96", name: "", type: "int96" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "armyToken",
    outputs: [
      { internalType: "contract ISuperToken", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperToken",
        name: "superToken",
        type: "address",
      },
      { internalType: "address", name: "agreementClass", type: "address" },
      { internalType: "bytes32", name: "", type: "bytes32" },
      { internalType: "bytes", name: "agreementData", type: "bytes" },
      { internalType: "bytes", name: "", type: "bytes" },
    ],
    name: "beforeAgreementCreated",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperToken",
        name: "superToken",
        type: "address",
      },
      { internalType: "address", name: "agreementClass", type: "address" },
      { internalType: "bytes32", name: "", type: "bytes32" },
      { internalType: "bytes", name: "agreementData", type: "bytes" },
      { internalType: "bytes", name: "", type: "bytes" },
    ],
    name: "beforeAgreementTerminated",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperToken",
        name: "superToken",
        type: "address",
      },
      { internalType: "address", name: "agreementClass", type: "address" },
      { internalType: "bytes32", name: "", type: "bytes32" },
      { internalType: "bytes", name: "agreementData", type: "bytes" },
      { internalType: "bytes", name: "", type: "bytes" },
    ],
    name: "beforeAgreementUpdated",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cashToken",
    outputs: [
      { internalType: "contract ISuperToken", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decay",
    outputs: [{ internalType: "int96", name: "", type: "int96" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "agreementClass", type: "address" },
    ],
    name: "isAcceptedAgreement",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperToken",
        name: "superToken",
        type: "address",
      },
    ],
    name: "isAcceptedSuperToken",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "king",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "rate",
    outputs: [{ internalType: "int96", name: "", type: "int96" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rate",
    outputs: [{ internalType: "int96", name: "", type: "int96" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "step",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "taxRate",
    outputs: [{ internalType: "int96", name: "", type: "int96" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "bytes", name: "", type: "bytes" },
      { internalType: "bytes", name: "", type: "bytes" },
    ],
    name: "tokensReceived",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasureRate",
    outputs: [{ internalType: "int96", name: "", type: "int96" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

export default KingOfTheHillABI;