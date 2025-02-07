import type { Config } from "@jest/types";
// eslint-disable-next-line import/no-extraneous-dependencies
import { pathsToModuleNameMapper } from "ts-jest";
// Load the config which holds the path aliases.
import { compilerOptions } from "../../tsconfig.json";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  // testEnvironment: "jsdom",

  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    // This has to match the baseUrl defined in tsconfig.json.
    prefix: "<rootDir>/../../",
  }),
};

export default config;
