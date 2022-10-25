# Overview

This repo contains a typescript client for the klaviyo api, based on the swagger spec provided to us by klaviyo(`oas.json`). This client is generated using [`openapi-generator`](https://openapi-generator.tech/) you can find docs for the generator we are using `typescript-axios` [here](https://openapi-generator.tech/docs/generators/typescript-axios/).

## Directions

In order to generate the api client run `openapi-generator generate -i oas.json -g typescript-axios --api-package=api --model-package=models --additional-properties=withSeparateModelsAndApi=true,paramNaming=original,useSingleRequestParameter=true,enumPropertyNaming=original` in side this directory.

After generating you will need to fix some enum attributes inside of `MetricAggregateQueryAsSubResourceAttributesSortEnum`, since some of these values start with a `-` symbol in the spec and that doesn't transulate to typescript well. I chose to rename those attributes as `<attribute-name>_descending` since this enum is for sorting.

## Notes

- I had to use the `oas.json` file instead of `oas_node.json` for some reason the latter generated a client with none of the type information for the response.
- Some of the enum properties get generated in a way that causes lint error and have to be manually fixed, as mentioned above. I think there may be a way to automate this or feed an option to the generator to prevent this, but I haven't found that yet.
