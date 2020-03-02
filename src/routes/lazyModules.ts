import { importChunk } from "utils/codeSplitHelpers"
import { StoreManager } from "utils/StoreManager"

/**
 * This function is where you define your route chunks.
 * Add one line for each component and use the `importChunk` helper to automatically add reducers, sagas
 * and redux middleware to the store once the module loads.
 */
export const lazyModules = (storeManager: StoreManager) => ({
	Todo: importChunk(storeManager)(() => import(/* webpackChunkName: "Todo" */ "features/Todo"))
})