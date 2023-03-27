import { AccountTokenSnapshot } from "@superfluid-finance/sdk-core";
import { BigNumber } from "ethers";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";
import { useContractRead } from "wagmi";
import KingOfTheHillABI from "../configuration/KingOfTheHillABI";
import network from "../configuration/network";
import { rpcApi, subgraphApi } from "../redux/store";

interface GameContextValue {
  king?: string;
  army?: BigNumber;
  decay?: BigNumber;
  step?: BigNumber;
  treasureSnapshot: AccountTokenSnapshot | null | undefined;
}
const GameContext = createContext<GameContextValue>(null!);

const GameContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const kingRequest = rpcApi.useGetActiveKingQuery();
  const armyRequest = rpcApi.useGetArmySizeQuery();
  const decayRequest = rpcApi.useGetDecayQuery();
  const stepRequest = rpcApi.useGetStepQuery();

  const hillTreasureSnapshotQuery = subgraphApi.useAccountTokenSnapshotQuery({
    chainId: network.id,
    id: `${network.hillAddress}-${network.cashToken}`,
  });

  const contextValue = useMemo(() => {
    return {
      king: kingRequest.data,
      army: armyRequest.data ? BigNumber.from(armyRequest.data) : undefined,
      decay: decayRequest.data ? BigNumber.from(decayRequest.data) : undefined,
      step: stepRequest.data ? BigNumber.from(stepRequest.data) : undefined,
      treasureSnapshot: hillTreasureSnapshotQuery.data,
    };
  }, [
    kingRequest.data,
    armyRequest.data,
    decayRequest.data,
    stepRequest.data,
    hillTreasureSnapshotQuery.data,
  ]);

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;

export const useGameContext = () => useContext(GameContext);
