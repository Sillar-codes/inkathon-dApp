import { contracts } from "@polkadot-api/descriptors"
import { deployContract } from "./utils/deploy-contract"
import { initApi } from "./utils/init-api"
import { writeAddresses } from "./utils/write-addresses"


main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(() => process.exit(0))
