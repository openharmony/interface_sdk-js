/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit ArkData
 */

import Context from './application/BaseContext';

/**
 * Provides methods for graphStore create and delete.
 *
 * @namespace graphStore
 * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
 * @systemapi
 * @since 16
 */
declare namespace graphStore {
  /**
   * Indicates possible value types
   *
   * @typedef { null | number | string } ValueType
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @systemapi
   * @since 16
   */
  type ValueType = null | number | string;

  /**
   * Describes the security level.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @systemapi
   * @since 16
   */
  enum SecurityLevel {
    /**
     * S1: means the db is low level security
     * There are some low impact, when the data is leaked.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    S1 = 1,
    /**
     * S2: means the db is middle level security
     * There are some major impact, when the data is leaked.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    S2 = 2,
    /**
     * S3: means the db is high level security
     * There are some severity impact, when the data is leaked.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    S3 = 3,
    /**
     * S4: means the db is critical level security
     * There are some critical impact, when the data is leaked.
     *
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    S4 = 4
  }

  /**
   * Manages graph database configurations.
   *
   * @interface storeConfig
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @systemapi
   * @since 16
   */
  interface StoreConfig {
    /**
     * The database name.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    name: string;
    /**
     * Specifies the security level of the database.
     *
     * @type { SecurityLevel }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    securityLevel: SecurityLevel;
  }

  /**
   * Defines Vertex Type.
   *
   * @interface Vertex
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @systemapi
   * @since 16
   */
  interface Vertex {
    /**
     * The Vertex element identifier.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    vid: string;
    /**
     * Labels of the vertex.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    labels: Array<string>;
    /**
     * Properties of the vertex.
     *
     * @type { Record<string, ValueType> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    properties: Record<string, ValueType>;
  }

  /**
   * Defines Edge Type.
   *
   * @interface Edge
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @systemapi
   * @since 16
   */
  interface Edge {
    /**
     * The Edge element identifier.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    eid: string;
    /**
     * Type of the edge.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    type: string;
    /**
     * The Start Vertex element identifier.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    startVid: string;
    /**
     * The End Vertex element identifier.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    endVid: string;
    /**
     * Properties of the edge.
     *
     * @type { Record<string, ValueType> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    properties: Record<string, ValueType>;
  }

  /**
   * Defines PathSegment Type.
   *
   * @interface PathSegment
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @systemapi
   * @since 16
   */
  interface PathSegment {
    /**
     * Start vertex.
     *
     * @type { Vertex }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    start: Vertex;
    /**
     * End vertex.
     *
     * @type { Vertex }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    end: Vertex;
    /**
     * The edge between start vertex and end vertex.
     *
     * @type { Edge }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    edge: Edge;
  }

  /**
   * Defines Path Type.
   *
   * @interface Path
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @systemapi
   * @since 16
   */
  interface Path {
    /**
     * Start vertex.
     *
     * @type { Vertex }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    start: Vertex;
    /**
     * End vertex.
     *
     * @type { Vertex }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    end: Vertex;
    /**
     * Length of segments.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    length: number;
    /**
     * Segments in the path.
     *
     * @type { Array<PathSegment> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    segments: Array<PathSegment>;
  }

  /**
   * The GQL statement execution result.
   *
   * @interface Result
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @systemapi
   * @since 16
   */
  interface Result {
    /**
     * The data records of querying the database.
     *
     * @type { ?Array<Record<string, Object>> }
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    records?: Array<Record<string, Object>>;
  }

  /**
   * Provides transactional methods for managing the graph database.
   *
   * @interface Transaction
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @systemapi
   * @since 16
   */
  interface Transaction {
    /**
     * Execute a query procedure.
     *
     * @param { string } gql - Indicates the GQL statement to execute.
     * @returns { Promise<Result> } The {@link Result} object if the operation is successful.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 31300000 - Inner error.
     * @throws { BusinessError } 31300001 - Database corrupted.
     * @throws { BusinessError } 31300002 - Already closed.
     * @throws { BusinessError } 31300003 - The database is busy.
     * @throws { BusinessError } 31300004 - The database is out of memory.
     * @throws { BusinessError } 31300005 - The database is full.
     * @throws { BusinessError } 31300006 - Duplicate type or properties name of vertex and edge.
     * @throws { BusinessError } 31300007 - The type or properties of vertex and edge is not defined.
     * @throws { BusinessError } 31300008 - The type or properties name of vertex and edge does not conform to constraint.
     * @throws { BusinessError } 31300009 - The GQL statement syntax error.
     * @throws { BusinessError } 31300010 - The GQL statement semantic error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    read(gql: string): Promise<Result>;

    /**
     * Execute a data-modifying procedure.
     *
     * @param { string } gql - Indicates the GQL statement to execute.
     * @returns { Promise<Result> } The {@link Result} object if the operation is successful.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 31300000 - Inner error.
     * @throws { BusinessError } 31300001 - Database corrupted.
     * @throws { BusinessError } 31300002 - Already closed.
     * @throws { BusinessError } 31300003 - The database is busy.
     * @throws { BusinessError } 31300004 - The database is out of memory.
     * @throws { BusinessError } 31300005 - The database is full.
     * @throws { BusinessError } 31300006 - Duplicate type or properties name of vertex and edge.
     * @throws { BusinessError } 31300007 - The type or properties of vertex and edge is not defined.
     * @throws { BusinessError } 31300008 - The type or properties name of vertex and edge does not conform to constraint.
     * @throws { BusinessError } 31300009 - The GQL statement syntax error.
     * @throws { BusinessError } 31300010 - The GQL statement semantic error.
     * @throws { BusinessError } 31300012 - The number of types or properties of vertex and edge exceeds the upper limit.
     * @throws { BusinessError } 31300013 - A conflicting constraint already exists.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    write(gql: string): Promise<Result>;

    /**
     * Commit the transaction.
     * 
     * @returns { Promise<void> } The Promise used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 31300000 - Inner error.
     * @throws { BusinessError } 31300001 - Database corrupted.
     * @throws { BusinessError } 31300002 - Already closed.
     * @throws { BusinessError } 31300003 - The database is busy.
     * @throws { BusinessError } 31300004 - The database is out of memory.
     * @throws { BusinessError } 31300005 - The database is full.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    commit(): Promise<void>;

    /**
     * Rollback the transaction.
     * 
     * @returns { Promise<void> } The Promise used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 31300000 - Inner error.
     * @throws { BusinessError } 31300001 - Database corrupted.
     * @throws { BusinessError } 31300002 - Already closed.
     * @throws { BusinessError } 31300003 - The database is busy.
     * @throws { BusinessError } 31300004 - The database is out of memory.
     * @throws { BusinessError } 31300005 - The database is full.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    rollback(): Promise<void>;
  }

  /**
   * Provides methods for managing the graph database.
   *
   * @interface GraphStore
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @systemapi
   * @since 16
   */
  interface GraphStore {
    /**
     * Execute a query procedure.
     *
     * @param { string } gql - Indicates the GQL statement to execute.
     * @returns { Promise<Result> } The {@link Result} object if the operation is successful.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 31300000 - Inner error.
     * @throws { BusinessError } 31300001 - Database corrupted.
     * @throws { BusinessError } 31300002 - Already closed.
     * @throws { BusinessError } 31300003 - The database is busy.
     * @throws { BusinessError } 31300004 - The database is out of memory.
     * @throws { BusinessError } 31300005 - The database is full.
     * @throws { BusinessError } 31300006 - Duplicate type or properties name of vertex and edge.
     * @throws { BusinessError } 31300007 - The type or properties of vertex and edge is not defined.
     * @throws { BusinessError } 31300008 - The type or properties name of vertex and edge does not conform to constraint.
     * @throws { BusinessError } 31300009 - The GQL statement syntax error.
     * @throws { BusinessError } 31300010 - The GQL statement semantic error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    read(gql: string): Promise<Result>;

    /**
     * Execute a data-modifying or catalog-modifying procedure.
     *
     * @param { string } gql - Indicates the GQL statement to execute.
     * @returns { Promise<Result> } The {@link Result} object if the operation is successful.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 31300000 - Inner error.
     * @throws { BusinessError } 31300001 - Database corrupted.
     * @throws { BusinessError } 31300002 - Already closed.
     * @throws { BusinessError } 31300003 - The database is busy.
     * @throws { BusinessError } 31300004 - The database is out of memory.
     * @throws { BusinessError } 31300005 - The database is full.
     * @throws { BusinessError } 31300006 - Duplicate type or properties name of vertex and edge.
     * @throws { BusinessError } 31300007 - The type or properties of vertex and edge is not defined.
     * @throws { BusinessError } 31300008 - The type or properties name of vertex and edge does not conform to constraint.
     * @throws { BusinessError } 31300009 - The GQL statement syntax error.
     * @throws { BusinessError } 31300010 - The GQL statement semantic error.
     * @throws { BusinessError } 31300012 - The number of types or properties of vertex and edge exceeds the upper limit.
     * @throws { BusinessError } 31300013 - A conflicting constraint already exists.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    write(gql: string): Promise<Result>;

    /**
     * Create a transaction instance.
     *
     * @returns { Promise<Transaction> } The {@link Transaction} object if the operation is successful.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 31300000 - Inner error.
     * @throws { BusinessError } 31300001 - Database corrupted.
     * @throws { BusinessError } 31300002 - Already closed.
     * @throws { BusinessError } 31300003 - The database is busy.
     * @throws { BusinessError } 31300004 - The database is out of memory.
     * @throws { BusinessError } 31300005 - The database is full.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    createTransaction(): Promise<Transaction>;

    /**
     * Close the GraphStore and opened transactions will be rollback.
     * @returns { Promise<void> } The Promise returned by the function.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 31300000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
     * @systemapi
     * @since 16
     */
    close(): Promise<void>;
  }

  /**
   * Obtains a graph store.
   * You can set parameters of the graph store as required. In general, this method is recommended
   * to obtain a graph store.
   *
   * @param { Context } context - Indicates the context of an application or ability.
   * @param { StoreConfig } config - Indicates the {@link StoreConfig} configuration of the database related to this graph store.
   * @returns { Promise<GraphStore> } The graph store {@link GraphStore}.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 31300000 - Inner error.
   * @throws { BusinessError } 31300001 - Database corrupted.
   * @throws { BusinessError } 31300014 - Invalid database path.
   * @throws { BusinessError } 31300015 - Config changed.
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @systemapi
   * @since 16
   */
  function getStore(context: Context, config: StoreConfig): Promise<GraphStore>;

  /**
   * Deletes the database with a specified store config.
   *
   * @param { Context } context - Indicates the context of an application or ability.
   * @param { StoreConfig } config - Indicates the {@link StoreConfig} configuration of the database related to this graph store.
   * @returns { Promise<void> } The Promise returned by the function.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 31300000 - Inner error.
   * @throws { BusinessError } 31300014 - Invalid database path.
   * @syscap SystemCapability.DistributedDataManager.DataIntelligence.Core
   * @systemapi
   * @since 16
   */
  function deleteStore(context: Context, config: StoreConfig): Promise<void>;
}

export default graphStore;
