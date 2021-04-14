import { SanityCodegenConfig } from 'sanity-codegen';

const config: SanityCodegenConfig = {
  schemaPath: './ywst-studio-v1/src/schemas/schema',
  outputPath: './types/schema.ts',
};

export default config;