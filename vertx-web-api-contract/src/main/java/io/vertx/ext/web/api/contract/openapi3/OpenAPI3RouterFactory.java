package io.vertx.ext.web.api.contract.openapi3;

import io.vertx.codegen.annotations.Fluent;
import io.vertx.codegen.annotations.GenIgnore;
import io.vertx.codegen.annotations.VertxGen;
import io.vertx.core.*;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.api.contract.RouterFactory;
import io.vertx.ext.web.api.contract.RouterFactoryException;
import io.vertx.ext.web.api.contract.openapi3.impl.OpenAPI3RouterFactoryImpl;
import io.vertx.ext.web.api.contract.openapi3.impl.OpenApi3Utils;
import io.vertx.ext.web.api.contract.openapi3.impl.Utils;
import io.vertx.ext.web.handler.BodyHandler;
import org.apache.commons.lang3.StringUtils;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Interface for OpenAPI3RouterFactory. <br/>
 * To add an handler, use {@link OpenAPI3RouterFactory#addHandlerByOperationId(String, Handler)}<br/>
 * Usage example:
 * <pre>
 * {@code
 * OpenAPI3RouterFactory.create(vertx, "src/resources/spec.yaml", asyncResult -> {
 *  if (!asyncResult.succeeded()) {
 *     // IO failure or spec invalid
 *  } else {
 *     OpenAPI3RouterFactory routerFactory = asyncResult.result();
 *     routerFactory.addHandlerByOperationId("operation_id", routingContext -> {
 *        // Do something
 *     }, routingContext -> {
 *        // Do something with failure handler
 *     });
 *     Router router = routerFactory.getRouter();
 *  }
 * });
 * }
 * </pre>
 * <br/>
 * Handlers are loaded in this order:<br/>
 *  <ol>
 *   <li>Body handler (Customizable with {@link this#setBodyHandler(BodyHandler)}</li>
 *   <li>Custom global handlers configurable with {@link this#addGlobalHandler(Handler)}</li>
 *   <li>Global security handlers defined in upper spec level</li>
 *   <li>Operation specific security handlers</li>
 *   <li>Generated validation handler</li>
 *   <li>User handlers or "Not implemented" handler</li>
 * </ol>
 *
 * @author Francesco Guardiani @slinkydeveloper
 * @deprecated You should use the new module vertx-web-openapi
 */
@VertxGen
@Deprecated
public interface OpenAPI3RouterFactory extends RouterFactory {

  /**
   * Add a particular scope validator. The main security schema will not be called if a specific scope validator is
   * configured
   *
   * @param securitySchemaName
   * @param scopeName
   * @param handler
   * @return this factory
   */
  @Fluent
  OpenAPI3RouterFactory addSecuritySchemaScopeValidator(String securitySchemaName, String scopeName,
                                                        Handler<RoutingContext> handler);

  /**
   * Add an handler by operation_id field in Operation object
   *
   * @param operationId
   * @param handler
   * @return this factory
   */
  @Fluent
  OpenAPI3RouterFactory addHandlerByOperationId(String operationId, Handler<RoutingContext> handler);

  /**
   * Add a failure handler by operation_id field in Operation object
   *
   * @param operationId
   * @param failureHandler
   * @return this factory
   */
  @Fluent
  OpenAPI3RouterFactory addFailureHandlerByOperationId(String operationId, Handler<RoutingContext> failureHandler);

  /**
   * Specify to route an incoming request for specified operation id to a Web Api Service mounted at the specified address on event bus. Please give a look at <a href="https://vertx.io/docs/vertx-web-api-service/java/">vertx-web-api-service documentation</a> for more informations
   *
   * @param operationId
   * @param address
   * @return this factory
   */
  @Fluent
  OpenAPI3RouterFactory mountOperationToEventBus(String operationId, String address);

  /**
   * Specify to route an incoming request for all operations that contains the specified tag to a Web Api Service mounted at the specified address on event bus.
   * The request is handled by the method that matches the operation id. Please give a look at <a href="https://vertx.io/docs/vertx-web-api-service/java/">vertx-web-api-service documentation</a> for more informations
   *
   * @param tag
   * @param address
   * @return this factory
   */
  @Fluent
  OpenAPI3RouterFactory mountServiceFromTag(String tag, String address);

  /**
   * Introspect the OpenAPI spec to mount handlers for all operations that specifies a x-vertx-event-bus annotation. Please give a look at <a href="https://vertx.io/docs/vertx-web-api-service/java/">vertx-web-api-service documentation</a> for more informations
   *
   * @return this factory
   */
  @Fluent
  OpenAPI3RouterFactory mountServicesFromExtensions();

  /**
   * Introspect the Web Api Service interface to route to service all matching method names with operation ids. Please give a look at <a href="https://vertx.io/docs/vertx-web-api-service/java/">vertx-web-api-service documentation</a> for more informations
   *
   * @return this factory
   */
  @Fluent
  @GenIgnore
  OpenAPI3RouterFactory mountServiceInterface(Class interfaceClass, String address);


  /**
   * @see OpenAPI3RouterFactory#create(Vertx, String)
   * @param vertx
   * @param url location of your spec. It can be an absolute path, a local path or remote url (with HTTP protocol)
   * @return future When specification is loaded, this future will be called with AsyncResult<OpenAPI3RouterFactory>
   */
  static Future<OpenAPI3RouterFactory> create(Vertx vertx, String url) {
    return create(vertx, url, Collections.emptyList());
  }

  /**
   * Create a new OpenAPI3RouterFactory
   *
   * @param vertx
   * @param url location of your spec. It can be an absolute path, a local path or remote url (with HTTP protocol)
   * @param auth list of authorization values needed to access the remote url. Each item should be json representation
   *             of an {@code AuthorizationValue}
   * @return future When specification is loaded, this future will be called with AsyncResult<OpenAPI3RouterFactory>
   */
  static Future<OpenAPI3RouterFactory> create(Vertx vertx, String url, List<JsonObject> auth) {
    return Utils.create(vertx, url, auth);
  }
}
