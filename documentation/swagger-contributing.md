# Estuary Swagger Contribution

Swagger is the most widely used tooling ecosystem for developing APIs with the OpenAPI Specification(OAS). Not only its an open source tool for build APIs, it's also a collaborative tool that encourage different set of developers to extend APIs that decouples the documentation from the code (client and server stubs).

## Identify and plan your extension
Like any other design or software contribution, you need to plan out your endpoints. Make sure that all of these endpoints have the parameters, requests body types, responses, description and summary. Be as detailed as possible but the most important thing is to make the documentation understandable to the developers. 

## Step 1: Checkout estuary-doc

```
git clone https://github.com/application-research/estuary-docs
```

## Step 2: Open the swagger file for modification

- Open /public/static/swagger
- Create a new version folder example: v1_0_1
- Add your changes

## Step 3: Generate your code
Generate the client or server stubs you need. You can use the swaggerhub for this.
 ![API Key placement](static/swagger/generate_client_server.png)

## Step 4: Modify the generated code
Swagger generated code is not the best (it doesn't comply with any standards) but it does the majority of the work, and it works! Make sure to triple check the generate code, ensure that the code complies with the defined standards of your project.

## Step 5: Commit your changes
- Modify the swagger-ui-page.tsx 
- Use the new URL static/swagger/v1_0_1/swagger.json
- Create the PR and set it for review.