export const wagmiContractConfig = [
  {
    "type": "function",
    "name": "diamondCut",
    "inputs": [
      {
        "name": "_diamondCut",
        "type": "tuple[]",
        "internalType": "struct IDiamond.FacetCut[]",
        "components": [
          {
            "name": "facetAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "action",
            "type": "uint8",
            "internalType": "enum IDiamond.FacetCutAction"
          },
          {
            "name": "functionSelectors",
            "type": "bytes4[]",
            "internalType": "bytes4[]"
          }
        ]
      },
      { "name": "_init", "type": "address", "internalType": "address" },
      { "name": "_calldata", "type": "bytes", "internalType": "bytes" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "DiamondCut",
    "inputs": [
      {
        "name": "_diamondCut",
        "type": "tuple[]",
        "indexed": false,
        "internalType": "struct IDiamond.FacetCut[]",
        "components": [
          {
            "name": "facetAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "action",
            "type": "uint8",
            "internalType": "enum IDiamond.FacetCutAction"
          },
          {
            "name": "functionSelectors",
            "type": "bytes4[]",
            "internalType": "bytes4[]"
          }
        ]
      },
      {
        "name": "_init",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "_calldata",
        "type": "bytes",
        "indexed": false,
        "internalType": "bytes"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "CannotAddFunctionToDiamondThatAlreadyExists",
    "inputs": [
      { "name": "_selector", "type": "bytes4", "internalType": "bytes4" }
    ]
  },
  {
    "type": "error",
    "name": "CannotAddSelectorsToZeroAddress",
    "inputs": [
      { "name": "_selectors", "type": "bytes4[]", "internalType": "bytes4[]" }
    ]
  },
  {
    "type": "error",
    "name": "CannotRemoveFunctionThatDoesNotExist",
    "inputs": [
      { "name": "_selector", "type": "bytes4", "internalType": "bytes4" }
    ]
  },
  {
    "type": "error",
    "name": "CannotRemoveImmutableFunction",
    "inputs": [
      { "name": "_selector", "type": "bytes4", "internalType": "bytes4" }
    ]
  },
  {
    "type": "error",
    "name": "CannotReplaceFunctionThatDoesNotExists",
    "inputs": [
      { "name": "_selector", "type": "bytes4", "internalType": "bytes4" }
    ]
  },
  {
    "type": "error",
    "name": "CannotReplaceFunctionWithTheSameFunctionFromTheSameFacet",
    "inputs": [
      { "name": "_selector", "type": "bytes4", "internalType": "bytes4" }
    ]
  },
  {
    "type": "error",
    "name": "CannotReplaceFunctionsFromFacetWithZeroAddress",
    "inputs": [
      { "name": "_selectors", "type": "bytes4[]", "internalType": "bytes4[]" }
    ]
  },
  {
    "type": "error",
    "name": "CannotReplaceImmutableFunction",
    "inputs": [
      { "name": "_selector", "type": "bytes4", "internalType": "bytes4" }
    ]
  },
  {
    "type": "error",
    "name": "IncorrectFacetCutAction",
    "inputs": [{ "name": "_action", "type": "uint8", "internalType": "uint8" }]
  },
  {
    "type": "error",
    "name": "InitializationFunctionReverted",
    "inputs": [
      {
        "name": "_initializationContractAddress",
        "type": "address",
        "internalType": "address"
      },
      { "name": "_calldata", "type": "bytes", "internalType": "bytes" }
    ]
  },
  {
    "type": "error",
    "name": "NoBytecodeAtAddress",
    "inputs": [
      {
        "name": "_contractAddress",
        "type": "address",
        "internalType": "address"
      },
      { "name": "_message", "type": "string", "internalType": "string" }
    ]
  },
  {
    "type": "error",
    "name": "NoSelectorsProvidedForFacetForCut",
    "inputs": [
      { "name": "_facetAddress", "type": "address", "internalType": "address" }
    ]
  },
  {
    "type": "error",
    "name": "NotContractOwner",
    "inputs": [
      { "name": "_user", "type": "address", "internalType": "address" },
      { "name": "_contractOwner", "type": "address", "internalType": "address" }
    ]
  },
  {
    "type": "error",
    "name": "RemoveFacetAddressMustBeZeroAddress",
    "inputs": [
      { "name": "_facetAddress", "type": "address", "internalType": "address" }
    ]
  },
  {
    "type": "function",
    "name": "facetAddress",
    "inputs": [
      {
        "name": "_functionSelector",
        "type": "bytes4",
        "internalType": "bytes4"
      }
    ],
    "outputs": [
      { "name": "facetAddress_", "type": "address", "internalType": "address" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "facetAddresses",
    "inputs": [],
    "outputs": [
      {
        "name": "facetAddresses_",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "facetFunctionSelectors",
    "inputs": [
      { "name": "_facet", "type": "address", "internalType": "address" }
    ],
    "outputs": [
      {
        "name": "_facetFunctionSelectors",
        "type": "bytes4[]",
        "internalType": "bytes4[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "facets",
    "inputs": [],
    "outputs": [
      {
        "name": "facets_",
        "type": "tuple[]",
        "internalType": "struct IDiamondLoupe.Facet[]",
        "components": [
          {
            "name": "facetAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "functionSelectors",
            "type": "bytes4[]",
            "internalType": "bytes4[]"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "supportsInterface",
    "inputs": [
      { "name": "_interfaceId", "type": "bytes4", "internalType": "bytes4" }
    ],
    "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      { "name": "owner_", "type": "address", "internalType": "address" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "transferOwnership",
    "inputs": [
      { "name": "_newOwner", "type": "address", "internalType": "address" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [
      {
        "name": "previousOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "buyAccessory",
    "inputs": [
      { "name": "_petId", "type": "uint256", "internalType": "uint256" },
      { "name": "_id", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "calculateFpPerSecond",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "claimFp",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "fpOwed",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "fpSpent",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "sellItem",
    "inputs": [
      { "name": "_petId", "type": "uint256", "internalType": "uint256" },
      { "name": "_id", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setPetName",
    "inputs": [
      { "name": "_id", "type": "uint256", "internalType": "uint256" },
      { "name": "_name", "type": "string", "internalType": "string" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "BuyItem",
    "inputs": [
      {
        "name": "nftId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "giver",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "itemId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ClaimRewards",
    "inputs": [
      {
        "name": "nftId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "NameChange",
    "inputs": [
      {
        "name": "nftId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "name",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RedeemRewards",
    "inputs": [
      {
        "name": "petId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "reward",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SellItem",
    "inputs": [
      {
        "name": "nftId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "giver",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "itemId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  { "type": "error", "name": "CanNotUnequip", "inputs": [] },
  { "type": "error", "name": "ReentrancyGuardReentrantCall", "inputs": [] },
  {
    "type": "function",
    "name": "attackPoints",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "canBeBonked",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "canBonk",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "carrotsBalance",
    "inputs": [{ "name": "id", "type": "uint256", "internalType": "uint256" }],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "defensePoints",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "ethAccPerShare",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "ethOwed",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getDna",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [
      { "name": "", "type": "uint256[]", "internalType": "uint256[]" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getInfos",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [
      {
        "name": "pet",
        "type": "tuple",
        "internalType": "struct FrenPetFacet.PetInfo",
        "components": [
          { "name": "id", "type": "uint256", "internalType": "uint256" },
          { "name": "name", "type": "string", "internalType": "string" },
          { "name": "status", "type": "uint256", "internalType": "uint256" },
          { "name": "score", "type": "uint256", "internalType": "uint256" },
          { "name": "level", "type": "uint256", "internalType": "uint256" },
          {
            "name": "timeUntilStarving",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "lastAttacked",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "lastAttackUsed",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "owner", "type": "address", "internalType": "address" },
          { "name": "rewards", "type": "uint256", "internalType": "uint256" },
          {
            "name": "defensePoints",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "attackPoints",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "petWins", "type": "uint256", "internalType": "uint256" },
          {
            "name": "petItems",
            "type": "tuple[]",
            "internalType": "struct FrenPetFacet.PetItem[]",
            "components": [
              { "name": "name", "type": "string", "internalType": "string" },
              { "name": "owned", "type": "uint256", "internalType": "uint256" },
              {
                "name": "itemEquipExpires",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "itemIsSellable",
                "type": "bool",
                "internalType": "bool"
              }
            ]
          },
          { "name": "canBonk", "type": "bool", "internalType": "bool" },
          { "name": "canBeBonked", "type": "bool", "internalType": "bool" },
          {
            "name": "timePetBorn",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "stars", "type": "uint256", "internalType": "uint256" },
          {
            "name": "pointsToNextLevel",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "dna", "type": "uint256[]", "internalType": "uint256[]" },
          { "name": "fpSpent", "type": "uint256", "internalType": "uint256" },
          {
            "name": "fpPerSecond",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "fpOwed", "type": "uint256", "internalType": "uint256" },
          {
            "name": "wheelLastSpin",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "gachaInfo",
            "type": "tuple",
            "internalType": "struct FrenPetFacet.GachaInfo",
            "components": [
              {
                "name": "lastGatcha",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "nextGatcha",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "earnedGatcha",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "usedGatcha",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "availableGatcha",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "nextGachaPointsNeeded",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          },
          {
            "name": "monsterInfo",
            "type": "tuple",
            "internalType": "struct FrenPetFacet.MonsterInfo",
            "components": [
              {
                "name": "monstersCaught",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "nextMonsterWins",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "commit",
                "type": "bytes32",
                "internalType": "bytes32"
              },
              { "name": "nonce", "type": "bytes32", "internalType": "bytes32" }
            ]
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getInfosBatch",
    "inputs": [
      { "name": "petIds", "type": "uint256[]", "internalType": "uint256[]" }
    ],
    "outputs": [
      {
        "name": "pets",
        "type": "tuple[]",
        "internalType": "struct FrenPetFacet.PetInfo[]",
        "components": [
          { "name": "id", "type": "uint256", "internalType": "uint256" },
          { "name": "name", "type": "string", "internalType": "string" },
          { "name": "status", "type": "uint256", "internalType": "uint256" },
          { "name": "score", "type": "uint256", "internalType": "uint256" },
          { "name": "level", "type": "uint256", "internalType": "uint256" },
          {
            "name": "timeUntilStarving",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "lastAttacked",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "lastAttackUsed",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "owner", "type": "address", "internalType": "address" },
          { "name": "rewards", "type": "uint256", "internalType": "uint256" },
          {
            "name": "defensePoints",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "attackPoints",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "petWins", "type": "uint256", "internalType": "uint256" },
          {
            "name": "petItems",
            "type": "tuple[]",
            "internalType": "struct FrenPetFacet.PetItem[]",
            "components": [
              { "name": "name", "type": "string", "internalType": "string" },
              { "name": "owned", "type": "uint256", "internalType": "uint256" },
              {
                "name": "itemEquipExpires",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "itemIsSellable",
                "type": "bool",
                "internalType": "bool"
              }
            ]
          },
          { "name": "canBonk", "type": "bool", "internalType": "bool" },
          { "name": "canBeBonked", "type": "bool", "internalType": "bool" },
          {
            "name": "timePetBorn",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "stars", "type": "uint256", "internalType": "uint256" },
          {
            "name": "pointsToNextLevel",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "dna", "type": "uint256[]", "internalType": "uint256[]" },
          { "name": "fpSpent", "type": "uint256", "internalType": "uint256" },
          {
            "name": "fpPerSecond",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "fpOwed", "type": "uint256", "internalType": "uint256" },
          {
            "name": "wheelLastSpin",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "gachaInfo",
            "type": "tuple",
            "internalType": "struct FrenPetFacet.GachaInfo",
            "components": [
              {
                "name": "lastGatcha",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "nextGatcha",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "earnedGatcha",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "usedGatcha",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "availableGatcha",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "nextGachaPointsNeeded",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          },
          {
            "name": "monsterInfo",
            "type": "tuple",
            "internalType": "struct FrenPetFacet.MonsterInfo",
            "components": [
              {
                "name": "monstersCaught",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "nextMonsterWins",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "commit",
                "type": "bytes32",
                "internalType": "bytes32"
              },
              { "name": "nonce", "type": "bytes32", "internalType": "bytes32" }
            ]
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getItemInfo",
    "inputs": [
      { "name": "_itemId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [
      { "name": "_name", "type": "string", "internalType": "string" },
      { "name": "_price", "type": "uint256", "internalType": "uint256" },
      { "name": "_sellPrice", "type": "uint256", "internalType": "uint256" },
      { "name": "_points", "type": "uint256", "internalType": "uint256" },
      {
        "name": "_timeExtension",
        "type": "uint256",
        "internalType": "uint256"
      },
      { "name": "_itemDelta", "type": "uint256", "internalType": "uint256" },
      {
        "name": "_itemEquipExpires",
        "type": "uint256",
        "internalType": "uint256"
      },
      { "name": "_bought", "type": "uint256", "internalType": "uint256" },
      { "name": "_supply", "type": "uint256", "internalType": "uint256" },
      { "name": "_itemIsSellable", "type": "bool", "internalType": "bool" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getItemsInfo",
    "inputs": [],
    "outputs": [
      {
        "name": "itemsInfo",
        "type": "tuple[]",
        "internalType": "struct FrenPetFacet.ItemInfo[]",
        "components": [
          { "name": "name", "type": "string", "internalType": "string" },
          { "name": "price", "type": "uint256", "internalType": "uint256" },
          { "name": "sellPrice", "type": "uint256", "internalType": "uint256" },
          { "name": "points", "type": "uint256", "internalType": "uint256" },
          {
            "name": "timeExtension",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "itemDelta", "type": "uint256", "internalType": "uint256" },
          {
            "name": "itemEquipExpires",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "bought", "type": "uint256", "internalType": "uint256" },
          { "name": "supply", "type": "uint256", "internalType": "uint256" },
          { "name": "itemIsSellable", "type": "bool", "internalType": "bool" }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getPetAttackDefense",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [
      { "name": "attack", "type": "uint256", "internalType": "uint256" },
      { "name": "defense", "type": "uint256", "internalType": "uint256" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getPetInfo",
    "inputs": [
      { "name": "_nftId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [
      { "name": "_name", "type": "string", "internalType": "string" },
      { "name": "_status", "type": "uint256", "internalType": "uint256" },
      { "name": "_score", "type": "uint256", "internalType": "uint256" },
      { "name": "_level", "type": "uint256", "internalType": "uint256" },
      {
        "name": "_timeUntilStarving",
        "type": "uint256",
        "internalType": "uint256"
      },
      { "name": "_lastAttacked", "type": "uint256", "internalType": "uint256" },
      {
        "name": "_lastAttackUsed",
        "type": "uint256",
        "internalType": "uint256"
      },
      { "name": "_owner", "type": "address", "internalType": "address" },
      { "name": "_rewards", "type": "uint256", "internalType": "uint256" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getPetItems",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [
      {
        "name": "itemInfo",
        "type": "tuple[]",
        "internalType": "struct FrenPetFacet.PetItem[]",
        "components": [
          { "name": "name", "type": "string", "internalType": "string" },
          { "name": "owned", "type": "uint256", "internalType": "uint256" },
          {
            "name": "itemEquipExpires",
            "type": "uint256",
            "internalType": "uint256"
          },
          { "name": "itemIsSellable", "type": "bool", "internalType": "bool" }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getPrice",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getStatus",
    "inputs": [{ "name": "pet", "type": "uint256", "internalType": "uint256" }],
    "outputs": [
      { "name": "_health", "type": "uint256", "internalType": "uint256" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "goldBalance",
    "inputs": [{ "name": "id", "type": "uint256", "internalType": "uint256" }],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "hasTheDiamond",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isPetAlive",
    "inputs": [
      { "name": "_nftId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "itemExists",
    "inputs": [
      { "name": "itemId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "lastAttackUsed",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "lastAttacked",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "level",
    "inputs": [
      { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "minPrice",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "pendingEth",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "petBonk",
    "inputs": [{ "name": "id", "type": "uint256", "internalType": "uint256" }],
    "outputs": [
      { "name": "_targetId", "type": "uint256", "internalType": "uint256" },
      { "name": "_nonce", "type": "bytes32", "internalType": "bytes32" },
      { "name": "_commit", "type": "bytes32", "internalType": "bytes32" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "petItems",
    "inputs": [
      { "name": "_id", "type": "uint256", "internalType": "uint256" },
      { "name": "_itemId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "petName",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "petRewardDebt",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "petScore",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "petWins",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "pointsForLevel",
    "inputs": [{ "name": "l", "type": "uint256", "internalType": "uint256" }],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "pointsToNextLevel",
    "inputs": [
      { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "rewardsDebt",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "scoreLevel",
    "inputs": [
      { "name": "score", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "stars",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "timePetBorn",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "timeUntilStarving",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalCarrots",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalGold",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalScores",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "airdropDefensePoints",
    "inputs": [
      { "name": "to", "type": "uint256[]", "internalType": "uint256[]" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createItem",
    "inputs": [
      { "name": "name", "type": "string", "internalType": "string" },
      { "name": "price", "type": "uint256", "internalType": "uint256" },
      { "name": "points", "type": "uint256", "internalType": "uint256" },
      { "name": "timeExtension", "type": "uint256", "internalType": "uint256" },
      { "name": "itemDelta", "type": "uint256", "internalType": "uint256" },
      {
        "name": "itemEquipExpires",
        "type": "uint256",
        "internalType": "uint256"
      },
      { "name": "itemSupply", "type": "uint256", "internalType": "uint256" },
      { "name": "itemIsSellable", "type": "bool", "internalType": "bool" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "editItem",
    "inputs": [
      { "name": "_id", "type": "uint256", "internalType": "uint256" },
      { "name": "_name", "type": "string", "internalType": "string" },
      { "name": "_price", "type": "uint256", "internalType": "uint256" },
      { "name": "_points", "type": "uint256", "internalType": "uint256" },
      {
        "name": "_timeExtension",
        "type": "uint256",
        "internalType": "uint256"
      },
      { "name": "itemDelta", "type": "uint256", "internalType": "uint256" },
      {
        "name": "itemEquipExpires",
        "type": "uint256",
        "internalType": "uint256"
      },
      { "name": "itemSupply", "type": "uint256", "internalType": "uint256" },
      { "name": "itemIsSellable", "type": "bool", "internalType": "bool" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setDiamondAddress",
    "inputs": [
      { "name": "_facet", "type": "address", "internalType": "address" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setFpBuyerContract",
    "inputs": [
      { "name": "fpBuyer", "type": "address", "internalType": "address" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setGoldAddress",
    "inputs": [
      { "name": "token", "type": "address", "internalType": "address" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setHibernationPrice",
    "inputs": [
      { "name": "newPrice", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setLevelCalc",
    "inputs": [
      { "name": "la", "type": "uint256", "internalType": "uint256" },
      { "name": "lb", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setLootPrice",
    "inputs": [
      { "name": "newPrice", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setMintPrice",
    "inputs": [
      { "name": "price", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setMonstersAdddress",
    "inputs": [
      { "name": "newMonsters", "type": "address", "internalType": "address" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setRares",
    "inputs": [
      { "name": "id", "type": "uint256", "internalType": "uint256" },
      { "name": "_price", "type": "uint256", "internalType": "uint256" },
      { "name": "_supply", "type": "uint256", "internalType": "uint256" },
      { "name": "_startPoints", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setShroomPrice",
    "inputs": [
      { "name": "newPrice", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "DefensePoints",
    "inputs": [
      {
        "name": "nftId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "newPoints",
        "type": "int256",
        "indexed": false,
        "internalType": "int256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ItemCreated",
    "inputs": [
      {
        "name": "id",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "name",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "price",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "points",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "timeExtension",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "itemDelta",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "itemEquipExpires",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "itemSupply",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "itemIsSellable",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RarePetCreated",
    "inputs": [
      {
        "name": "id",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "_price",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "_supply",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "_startPoints",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "mint",
    "inputs": [{ "name": "ref", "type": "address", "internalType": "address" }],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "mintRare",
    "inputs": [
      { "name": "_type", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "Join",
    "inputs": [
      {
        "name": "minter",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "id",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "ref",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "currentGame",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "diceCanSettleGame",
    "inputs": [],
    "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "diceJoin",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" },
      { "name": "commit", "type": "bytes32", "internalType": "bytes32" },
      { "name": "signature", "type": "bytes", "internalType": "bytes" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "diceSetNewPrice",
    "inputs": [
      { "name": "newPrice", "type": "uint256", "internalType": "uint256" },
      { "name": "_gameSigner", "type": "address", "internalType": "address" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "diceSettleGame",
    "inputs": [
      { "name": "reveal", "type": "bytes32", "internalType": "bytes32" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "gameAmt",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "gameIdToCommit",
    "inputs": [
      { "name": "_gameId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "gameIdToPlayers",
    "inputs": [
      { "name": "_gameId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [
      { "name": "", "type": "uint256[6]", "internalType": "uint256[6]" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "gameIdToWinner",
    "inputs": [
      { "name": "_gameId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "gameIdToWinningNumber",
    "inputs": [
      { "name": "_gameId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "gameSigner",
    "inputs": [],
    "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "playerIndex",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "event",
    "name": "DiceJoin",
    "inputs": [
      {
        "name": "gameId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "petId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "number",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "DiceSettle",
    "inputs": [
      {
        "name": "gameId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "winningNumber",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "winner",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "redeem",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "bonkCommit",
    "inputs": [
      { "name": "attackerId", "type": "uint256", "internalType": "uint256" },
      { "name": "targetId", "type": "uint256", "internalType": "uint256" },
      { "name": "nonce", "type": "bytes32", "internalType": "bytes32" },
      { "name": "commit", "type": "bytes32", "internalType": "bytes32" },
      { "name": "signature", "type": "bytes", "internalType": "bytes" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "bonkReveal",
    "inputs": [
      { "name": "attackerId", "type": "uint256", "internalType": "uint256" },
      { "name": "reveal", "type": "bytes32", "internalType": "bytes32" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setBonkSigner",
    "inputs": [
      { "name": "newBonkSigner", "type": "address", "internalType": "address" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "Attack",
    "inputs": [
      {
        "name": "attacker",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "winner",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "loser",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "scoresWon",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "BonkCommit",
    "inputs": [
      {
        "name": "attackerId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "targetId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "nonce",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      },
      {
        "name": "commit",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "BonkReveal",
    "inputs": [
      {
        "name": "attackerId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "targetId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "commit",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      },
      {
        "name": "reveal",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "BonkTooSlow",
    "inputs": [
      {
        "name": "attackerId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "targetId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PetKilled",
    "inputs": [
      {
        "name": "nftId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "deadId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "loserName",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "reward",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "killer",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "winnerName",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      }
    ],
    "anonymous": false
  },
  { "type": "error", "name": "BonkCommitAlreadyUsed", "inputs": [] },
  { "type": "error", "name": "BonkCommitRevealMismatch", "inputs": [] },
  { "type": "error", "name": "BonkHasShield", "inputs": [] },
  { "type": "error", "name": "BonkLevelError", "inputs": [] },
  { "type": "error", "name": "BonkNotSelf", "inputs": [] },
  {
    "type": "error",
    "name": "BonkTooEarly",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ]
  },
  { "type": "error", "name": "InvalidBonkSignature", "inputs": [] },
  {
    "type": "error",
    "name": "NeedToRevealBonkFirst",
    "inputs": [
      { "name": "nonce", "type": "bytes32", "internalType": "bytes32" }
    ]
  },
  { "type": "error", "name": "NoPendingBonk", "inputs": [] },
  {
    "type": "function",
    "name": "setWheelSigner",
    "inputs": [
      { "name": "newWheelSigner", "type": "address", "internalType": "address" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "wheelCommit",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" },
      { "name": "gameId", "type": "uint256", "internalType": "uint256" },
      { "name": "commit", "type": "bytes32", "internalType": "bytes32" },
      { "name": "signature", "type": "bytes", "internalType": "bytes" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "wheelGameIdToCommit",
    "inputs": [
      { "name": "gameId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "wheelGameIdToWinningNumber",
    "inputs": [
      { "name": "gameId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "wheelLastSpin",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "wheelPetIdToGameId",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "wheelReveal",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" },
      { "name": "reveal", "type": "bytes32", "internalType": "bytes32" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "WheelCommit",
    "inputs": [
      {
        "name": "gameId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "petId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "commit",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "WheelReveal",
    "inputs": [
      {
        "name": "gameId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "petId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "winningNumber",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  { "type": "error", "name": "WheelCommitRevealMismatch", "inputs": [] },
  { "type": "error", "name": "WheelKnownGame", "inputs": [] },
  { "type": "error", "name": "WheelMustCommit", "inputs": [] },
  { "type": "error", "name": "WheelMustOwnPet", "inputs": [] },
  { "type": "error", "name": "WheelMustReveal", "inputs": [] },
  {
    "type": "error",
    "name": "WheelTooEarly",
    "inputs": [
      { "name": "whenCan", "type": "uint256", "internalType": "uint256" }
    ]
  },
  {
    "type": "function",
    "name": "kill",
    "inputs": [
      { "name": "_deadId", "type": "uint256", "internalType": "uint256" },
      { "name": "_tokenId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "Hibernated",
    "inputs": [
      {
        "name": "nftId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "deadId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "loserName",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "reward",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "killer",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "winnerName",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      }
    ],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "gatchaCommit",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" },
      { "name": "gameId", "type": "uint256", "internalType": "uint256" },
      { "name": "commit", "type": "bytes32", "internalType": "bytes32" },
      { "name": "signature", "type": "bytes", "internalType": "bytes" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "gatchaGameIdToCommit",
    "inputs": [
      { "name": "gameId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "gatchaGameIdToWinningNumber",
    "inputs": [
      { "name": "gameId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "gatchaInfo",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [
      { "name": "lastGatcha", "type": "uint256", "internalType": "uint256" },
      { "name": "nextGatcha", "type": "uint256", "internalType": "uint256" },
      { "name": "earnedGatcha", "type": "uint256", "internalType": "uint256" },
      { "name": "usedGatcha", "type": "uint256", "internalType": "uint256" },
      {
        "name": "availableGatcha",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "nextGachaPointsNeeded",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "gatchaLastSpin",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "gatchaPetIdToGameId",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "gatchaReveal",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" },
      { "name": "reveal", "type": "bytes32", "internalType": "bytes32" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getGatchaAvailable",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "setGatchaSigner",
    "inputs": [
      {
        "name": "newGatchaSigner",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "AttackPoints",
    "inputs": [
      {
        "name": "nftId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "newPoints",
        "type": "int256",
        "indexed": false,
        "internalType": "int256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "GatchaCommit",
    "inputs": [
      {
        "name": "gameId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "petId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "commit",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "GatchaReveal",
    "inputs": [
      {
        "name": "gameId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "petId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "winningNumber",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  { "type": "error", "name": "GatchaCommitRevealMismatch", "inputs": [] },
  { "type": "error", "name": "GatchaKnownGame", "inputs": [] },
  { "type": "error", "name": "GatchaMustCommit", "inputs": [] },
  { "type": "error", "name": "GatchaMustOwnPet", "inputs": [] },
  { "type": "error", "name": "GatchaMustReveal", "inputs": [] },
  { "type": "error", "name": "GatchaOutOfCoins", "inputs": [] },
  {
    "type": "error",
    "name": "GatchaTooEarly",
    "inputs": [
      { "name": "whenCan", "type": "uint256", "internalType": "uint256" }
    ]
  },
  {
    "type": "function",
    "name": "canPetAttackMonster",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "monsterAttackCommit",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" },
      { "name": "nonce", "type": "bytes32", "internalType": "bytes32" },
      { "name": "commit", "type": "bytes32", "internalType": "bytes32" },
      { "name": "signature", "type": "bytes", "internalType": "bytes" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "monsterAttackNext",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "monsterAttackReveal",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" },
      { "name": "reveal", "type": "bytes32", "internalType": "bytes32" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "monsterPetData",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [
      {
        "name": "monstersCaught",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "nextMonsterWins",
        "type": "uint256",
        "internalType": "uint256"
      },
      { "name": "commit", "type": "bytes32", "internalType": "bytes32" },
      { "name": "nonce", "type": "bytes32", "internalType": "bytes32" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "setMonsterAttackSigner",
    "inputs": [
      {
        "name": "newMonsterAttackSigner",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "MonsterAttackCommit",
    "inputs": [
      {
        "name": "petId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "nonce",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      },
      {
        "name": "commit",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "MonsterAttackLost",
    "inputs": [
      {
        "name": "petId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "winCounter",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "MonsterAttackWon",
    "inputs": [
      {
        "name": "petId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "winCounter",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  { "type": "error", "name": "InvalidMonsterAttackSignature", "inputs": [] },
  { "type": "error", "name": "MonsterAttackCommitAlreadyUsed", "inputs": [] },
  {
    "type": "error",
    "name": "MonsterAttackCommitRevealMismatch",
    "inputs": []
  },
  { "type": "error", "name": "MonsterAttackTooEarly", "inputs": [] },
  {
    "type": "error",
    "name": "NeedToRevealMonsterAttackFirst",
    "inputs": [
      { "name": "nonce", "type": "bytes32", "internalType": "bytes32" }
    ]
  },
  { "type": "error", "name": "NoPendingMonsterAttack", "inputs": [] },
  {
    "type": "function",
    "name": "calculateFee",
    "inputs": [
      { "name": "amount", "type": "uint256", "internalType": "uint256" },
      { "name": "pct", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "convertToAssets",
    "inputs": [
      { "name": "shares", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [
      { "name": "", "type": "uint256", "internalType": "uint256" },
      { "name": "", "type": "uint256", "internalType": "uint256" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getBuyGoldQuote",
    "inputs": [
      { "name": "amount", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getSellGoldquote",
    "inputs": [
      { "name": "amount", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "goldPrice",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "previewDeposit",
    "inputs": [
      { "name": "amount", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "stake",
    "inputs": [
      { "name": "amount", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "swapFPForGold",
    "inputs": [
      { "name": "amount", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "swapGoldForFP",
    "inputs": [
      { "name": "amount", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "totalFpCalc",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalFpInPool",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalGoldInPool",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalShares",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "unstake",
    "inputs": [
      { "name": "shares", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "userShares",
    "inputs": [
      { "name": "user", "type": "address", "internalType": "address" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "event",
    "name": "StakeGoldSwap",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SwapFPForGold",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "fp",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "gold",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SwapGoldForFP",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "gold",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "fp",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "UnstakeGoldSwap",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "gotFp",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "gotGold",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "claimGold",
    "inputs": [
      { "name": "amount", "type": "uint256", "internalType": "uint256" },
      { "name": "signature", "type": "bytes", "internalType": "bytes" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "claimPetGold",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setClaimGoldSigner",
    "inputs": [
      { "name": "newSigner", "type": "address", "internalType": "address" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  { "type": "error", "name": "AlreadyClaimed", "inputs": [] },
  { "type": "error", "name": "NotPetOwner", "inputs": [] },
  { "type": "error", "name": "SignerMismatch", "inputs": [] },
  {
    "type": "function",
    "name": "gameIdtoLootId",
    "inputs": [
      { "name": "gameId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "lootCommit",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" },
      { "name": "lootId", "type": "uint256", "internalType": "uint256" },
      { "name": "gameId", "type": "uint256", "internalType": "uint256" },
      { "name": "commit", "type": "bytes32", "internalType": "bytes32" },
      { "name": "signature", "type": "bytes", "internalType": "bytes" }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "lootGameIdToCommit",
    "inputs": [
      { "name": "gameId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "lootGameIdToWinningNumber",
    "inputs": [
      { "name": "gameId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "lootPetIdToGameId",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "lootReveal",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" },
      { "name": "reveal", "type": "bytes32", "internalType": "bytes32" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "nextLoot",
    "inputs": [
      { "name": "petId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "setLootSigner",
    "inputs": [
      { "name": "newLootSigner", "type": "address", "internalType": "address" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "LootCommit",
    "inputs": [
      {
        "name": "gameId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "petId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "commit",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "LootReveal",
    "inputs": [
      {
        "name": "gameId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "petId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "lootId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "winningNumber",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  { "type": "error", "name": "ErrorLootTooEarly", "inputs": [] },
  { "type": "error", "name": "LootCommitRevealMismatch", "inputs": [] },
  { "type": "error", "name": "LootIdUndefined", "inputs": [] },
  { "type": "error", "name": "LootKnownGame", "inputs": [] },
  { "type": "error", "name": "LootMustCommit", "inputs": [] },
  { "type": "error", "name": "LootMustOwnPet", "inputs": [] },
  { "type": "error", "name": "LootMustReveal", "inputs": [] },
  {
    "type": "error",
    "name": "LootTooEarly",
    "inputs": [
      { "name": "whenCan", "type": "uint256", "internalType": "uint256" }
    ]
  }
] as const