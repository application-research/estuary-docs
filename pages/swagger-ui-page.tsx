import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


function PageSwaggerTest(props) {
  return (
    <SwaggerUI url="static/swagger/v1_0_0/swagger.json" docExpansion="list" deepLinking={true} />
  );
}

export default PageSwaggerTest;

