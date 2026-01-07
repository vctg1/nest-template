
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model recipe
 * 
 */
export type recipe = $Result.DefaultSelection<Prisma.$recipePayload>
/**
 * Model ingredient
 * 
 */
export type ingredient = $Result.DefaultSelection<Prisma.$ingredientPayload>
/**
 * Model recipe_step
 * 
 */
export type recipe_step = $Result.DefaultSelection<Prisma.$recipe_stepPayload>
/**
 * Model review
 * 
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipe`: Exposes CRUD operations for the **recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.recipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.ingredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipe_step`: Exposes CRUD operations for the **recipe_step** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipe_steps
    * const recipe_steps = await prisma.recipe_step.findMany()
    * ```
    */
  get recipe_step(): Prisma.recipe_stepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.reviewDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    category: 'category',
    recipe: 'recipe',
    ingredient: 'ingredient',
    recipe_step: 'recipe_step',
    review: 'review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "category" | "recipe" | "ingredient" | "recipe_step" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      recipe: {
        payload: Prisma.$recipePayload<ExtArgs>
        fields: Prisma.recipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload>
          }
          findFirst: {
            args: Prisma.recipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload>
          }
          findMany: {
            args: Prisma.recipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload>[]
          }
          create: {
            args: Prisma.recipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload>
          }
          createMany: {
            args: Prisma.recipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.recipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload>[]
          }
          delete: {
            args: Prisma.recipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload>
          }
          update: {
            args: Prisma.recipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload>
          }
          deleteMany: {
            args: Prisma.recipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.recipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload>[]
          }
          upsert: {
            args: Prisma.recipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.recipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.recipeCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      ingredient: {
        payload: Prisma.$ingredientPayload<ExtArgs>
        fields: Prisma.ingredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ingredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ingredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>
          }
          findFirst: {
            args: Prisma.ingredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ingredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>
          }
          findMany: {
            args: Prisma.ingredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>[]
          }
          create: {
            args: Prisma.ingredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>
          }
          createMany: {
            args: Prisma.ingredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ingredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>[]
          }
          delete: {
            args: Prisma.ingredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>
          }
          update: {
            args: Prisma.ingredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>
          }
          deleteMany: {
            args: Prisma.ingredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ingredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ingredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>[]
          }
          upsert: {
            args: Prisma.ingredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ingredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.ingredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ingredientCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      recipe_step: {
        payload: Prisma.$recipe_stepPayload<ExtArgs>
        fields: Prisma.recipe_stepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recipe_stepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_stepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recipe_stepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_stepPayload>
          }
          findFirst: {
            args: Prisma.recipe_stepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_stepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recipe_stepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_stepPayload>
          }
          findMany: {
            args: Prisma.recipe_stepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_stepPayload>[]
          }
          create: {
            args: Prisma.recipe_stepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_stepPayload>
          }
          createMany: {
            args: Prisma.recipe_stepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.recipe_stepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_stepPayload>[]
          }
          delete: {
            args: Prisma.recipe_stepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_stepPayload>
          }
          update: {
            args: Prisma.recipe_stepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_stepPayload>
          }
          deleteMany: {
            args: Prisma.recipe_stepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recipe_stepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.recipe_stepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_stepPayload>[]
          }
          upsert: {
            args: Prisma.recipe_stepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_stepPayload>
          }
          aggregate: {
            args: Prisma.Recipe_stepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe_step>
          }
          groupBy: {
            args: Prisma.recipe_stepGroupByArgs<ExtArgs>
            result: $Utils.Optional<Recipe_stepGroupByOutputType>[]
          }
          count: {
            args: Prisma.recipe_stepCountArgs<ExtArgs>
            result: $Utils.Optional<Recipe_stepCountAggregateOutputType> | number
          }
        }
      }
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>
        fields: Prisma.reviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    category?: categoryOmit
    recipe?: recipeOmit
    ingredient?: ingredientOmit
    recipe_step?: recipe_stepOmit
    review?: reviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    recipes: number
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | UserCountOutputTypeCountRecipesArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    recipes: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | CategoryCountOutputTypeCountRecipesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipeWhereInput
  }


  /**
   * Count Type RecipeCountOutputType
   */

  export type RecipeCountOutputType = {
    ingredients: number
    steps: number
    reviews: number
  }

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | RecipeCountOutputTypeCountIngredientsArgs
    steps?: boolean | RecipeCountOutputTypeCountStepsArgs
    reviews?: boolean | RecipeCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingredientWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipe_stepWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: string | null
    id: number | null
  }

  export type UserMaxAggregateOutputType = {
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: string | null
    id: number | null
  }

  export type UserCountAggregateOutputType = {
    email: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    role: number
    id: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    id?: true
  }

  export type UserMaxAggregateInputType = {
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    id?: true
  }

  export type UserCountAggregateInputType = {
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    id?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    email: string
    password: string
    name: string
    createdAt: Date
    updatedAt: Date
    role: string
    id: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    id?: boolean
    recipes?: boolean | user$recipesArgs<ExtArgs>
    reviews?: boolean | user$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    id?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    id?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    id?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "password" | "name" | "createdAt" | "updatedAt" | "role" | "id", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | user$recipesArgs<ExtArgs>
    reviews?: boolean | user$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      recipes: Prisma.$recipePayload<ExtArgs>[]
      reviews: Prisma.$reviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      email: string
      password: string
      name: string
      createdAt: Date
      updatedAt: Date
      role: string
      id: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const userWithEmailOnly = await prisma.user.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `email`
     * const userWithEmailOnly = await prisma.user.createManyAndReturn({
     *   select: { email: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `email`
     * const userWithEmailOnly = await prisma.user.updateManyAndReturn({
     *   select: { email: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipes<T extends user$recipesArgs<ExtArgs> = {}>(args?: Subset<T, user$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends user$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, user$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
    readonly role: FieldRef<"user", 'String'>
    readonly id: FieldRef<"user", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.recipes
   */
  export type user$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
    where?: recipeWhereInput
    orderBy?: recipeOrderByWithRelationInput | recipeOrderByWithRelationInput[]
    cursor?: recipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * user.reviews
   */
  export type user$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    name: string | null
    id: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    name: string | null
    id: number | null
  }

  export type CategoryCountAggregateOutputType = {
    name: number
    id: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    name?: true
    id?: true
  }

  export type CategoryMaxAggregateInputType = {
    name?: true
    id?: true
  }

  export type CategoryCountAggregateInputType = {
    name?: true
    id?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    name: string
    id: number
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    id?: boolean
    recipes?: boolean | category$recipesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    id?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    id?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    name?: boolean
    id?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "id", ExtArgs["result"]["category"]>
  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | category$recipesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      recipes: Prisma.$recipePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      id: number
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const categoryWithNameOnly = await prisma.category.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `name`
     * const categoryWithNameOnly = await prisma.category.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `name`
     * const categoryWithNameOnly = await prisma.category.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipes<T extends category$recipesArgs<ExtArgs> = {}>(args?: Subset<T, category$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly name: FieldRef<"category", 'String'>
    readonly id: FieldRef<"category", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category createManyAndReturn
   */
  export type categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category updateManyAndReturn
   */
  export type categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category.recipes
   */
  export type category$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
    where?: recipeWhereInput
    orderBy?: recipeOrderByWithRelationInput | recipeOrderByWithRelationInput[]
    cursor?: recipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeAvgAggregateOutputType = {
    time: number | null
    calories: number | null
    servings: number | null
    id: number | null
    categoryId: number | null
    authorId: number | null
  }

  export type RecipeSumAggregateOutputType = {
    time: number | null
    calories: number | null
    servings: number | null
    id: number | null
    categoryId: number | null
    authorId: number | null
  }

  export type RecipeMinAggregateOutputType = {
    title: string | null
    image: string | null
    time: number | null
    difficulty: string | null
    calories: number | null
    servings: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    id: number | null
    categoryId: number | null
    authorId: number | null
  }

  export type RecipeMaxAggregateOutputType = {
    title: string | null
    image: string | null
    time: number | null
    difficulty: string | null
    calories: number | null
    servings: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    id: number | null
    categoryId: number | null
    authorId: number | null
  }

  export type RecipeCountAggregateOutputType = {
    title: number
    image: number
    time: number
    difficulty: number
    calories: number
    servings: number
    description: number
    createdAt: number
    updatedAt: number
    id: number
    categoryId: number
    authorId: number
    _all: number
  }


  export type RecipeAvgAggregateInputType = {
    time?: true
    calories?: true
    servings?: true
    id?: true
    categoryId?: true
    authorId?: true
  }

  export type RecipeSumAggregateInputType = {
    time?: true
    calories?: true
    servings?: true
    id?: true
    categoryId?: true
    authorId?: true
  }

  export type RecipeMinAggregateInputType = {
    title?: true
    image?: true
    time?: true
    difficulty?: true
    calories?: true
    servings?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    id?: true
    categoryId?: true
    authorId?: true
  }

  export type RecipeMaxAggregateInputType = {
    title?: true
    image?: true
    time?: true
    difficulty?: true
    calories?: true
    servings?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    id?: true
    categoryId?: true
    authorId?: true
  }

  export type RecipeCountAggregateInputType = {
    title?: true
    image?: true
    time?: true
    difficulty?: true
    calories?: true
    servings?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    id?: true
    categoryId?: true
    authorId?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipe to aggregate.
     */
    where?: recipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipeOrderByWithRelationInput | recipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type recipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipeWhereInput
    orderBy?: recipeOrderByWithAggregationInput | recipeOrderByWithAggregationInput[]
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum
    having?: recipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _avg?: RecipeAvgAggregateInputType
    _sum?: RecipeSumAggregateInputType
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }

  export type RecipeGroupByOutputType = {
    title: string
    image: string
    time: number
    difficulty: string
    calories: number
    servings: number | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    id: number
    categoryId: number
    authorId: number | null
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends recipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type recipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    title?: boolean
    image?: boolean
    time?: boolean
    difficulty?: boolean
    calories?: boolean
    servings?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    categoryId?: boolean
    authorId?: boolean
    ingredients?: boolean | recipe$ingredientsArgs<ExtArgs>
    author?: boolean | recipe$authorArgs<ExtArgs>
    category?: boolean | categoryDefaultArgs<ExtArgs>
    steps?: boolean | recipe$stepsArgs<ExtArgs>
    reviews?: boolean | recipe$reviewsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type recipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    title?: boolean
    image?: boolean
    time?: boolean
    difficulty?: boolean
    calories?: boolean
    servings?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    categoryId?: boolean
    authorId?: boolean
    author?: boolean | recipe$authorArgs<ExtArgs>
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type recipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    title?: boolean
    image?: boolean
    time?: boolean
    difficulty?: boolean
    calories?: boolean
    servings?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    categoryId?: boolean
    authorId?: boolean
    author?: boolean | recipe$authorArgs<ExtArgs>
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type recipeSelectScalar = {
    title?: boolean
    image?: boolean
    time?: boolean
    difficulty?: boolean
    calories?: boolean
    servings?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    categoryId?: boolean
    authorId?: boolean
  }

  export type recipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"title" | "image" | "time" | "difficulty" | "calories" | "servings" | "description" | "createdAt" | "updatedAt" | "id" | "categoryId" | "authorId", ExtArgs["result"]["recipe"]>
  export type recipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | recipe$ingredientsArgs<ExtArgs>
    author?: boolean | recipe$authorArgs<ExtArgs>
    category?: boolean | categoryDefaultArgs<ExtArgs>
    steps?: boolean | recipe$stepsArgs<ExtArgs>
    reviews?: boolean | recipe$reviewsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type recipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | recipe$authorArgs<ExtArgs>
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }
  export type recipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | recipe$authorArgs<ExtArgs>
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }

  export type $recipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recipe"
    objects: {
      ingredients: Prisma.$ingredientPayload<ExtArgs>[]
      author: Prisma.$userPayload<ExtArgs> | null
      category: Prisma.$categoryPayload<ExtArgs>
      steps: Prisma.$recipe_stepPayload<ExtArgs>[]
      reviews: Prisma.$reviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      title: string
      image: string
      time: number
      difficulty: string
      calories: number
      servings: number | null
      description: string | null
      createdAt: Date
      updatedAt: Date
      id: number
      categoryId: number
      authorId: number | null
    }, ExtArgs["result"]["recipe"]>
    composites: {}
  }

  type recipeGetPayload<S extends boolean | null | undefined | recipeDefaultArgs> = $Result.GetResult<Prisma.$recipePayload, S>

  type recipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface recipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recipe'], meta: { name: 'recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {recipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recipeFindUniqueArgs>(args: SelectSubset<T, recipeFindUniqueArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recipeFindUniqueOrThrowArgs>(args: SelectSubset<T, recipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recipeFindFirstArgs>(args?: SelectSubset<T, recipeFindFirstArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recipeFindFirstOrThrowArgs>(args?: SelectSubset<T, recipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `title`
     * const recipeWithTitleOnly = await prisma.recipe.findMany({ select: { title: true } })
     * 
     */
    findMany<T extends recipeFindManyArgs>(args?: SelectSubset<T, recipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe.
     * @param {recipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
     */
    create<T extends recipeCreateArgs>(args: SelectSubset<T, recipeCreateArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipes.
     * @param {recipeCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recipeCreateManyArgs>(args?: SelectSubset<T, recipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {recipeCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipes and only return the `title`
     * const recipeWithTitleOnly = await prisma.recipe.createManyAndReturn({
     *   select: { title: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends recipeCreateManyAndReturnArgs>(args?: SelectSubset<T, recipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe.
     * @param {recipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
     */
    delete<T extends recipeDeleteArgs>(args: SelectSubset<T, recipeDeleteArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe.
     * @param {recipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recipeUpdateArgs>(args: SelectSubset<T, recipeUpdateArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipes.
     * @param {recipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recipeDeleteManyArgs>(args?: SelectSubset<T, recipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recipeUpdateManyArgs>(args: SelectSubset<T, recipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes and returns the data updated in the database.
     * @param {recipeUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipes and only return the `title`
     * const recipeWithTitleOnly = await prisma.recipe.updateManyAndReturn({
     *   select: { title: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends recipeUpdateManyAndReturnArgs>(args: SelectSubset<T, recipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe.
     * @param {recipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     */
    upsert<T extends recipeUpsertArgs>(args: SelectSubset<T, recipeUpsertArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends recipeCountArgs>(
      args?: Subset<T, recipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends recipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recipeGroupByArgs['orderBy'] }
        : { orderBy?: recipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, recipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recipe model
   */
  readonly fields: recipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredients<T extends recipe$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, recipe$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    author<T extends recipe$authorArgs<ExtArgs> = {}>(args?: Subset<T, recipe$authorArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoryDefaultArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    steps<T extends recipe$stepsArgs<ExtArgs> = {}>(args?: Subset<T, recipe$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipe_stepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends recipe$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, recipe$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the recipe model
   */
  interface recipeFieldRefs {
    readonly title: FieldRef<"recipe", 'String'>
    readonly image: FieldRef<"recipe", 'String'>
    readonly time: FieldRef<"recipe", 'Int'>
    readonly difficulty: FieldRef<"recipe", 'String'>
    readonly calories: FieldRef<"recipe", 'Int'>
    readonly servings: FieldRef<"recipe", 'Int'>
    readonly description: FieldRef<"recipe", 'String'>
    readonly createdAt: FieldRef<"recipe", 'DateTime'>
    readonly updatedAt: FieldRef<"recipe", 'DateTime'>
    readonly id: FieldRef<"recipe", 'Int'>
    readonly categoryId: FieldRef<"recipe", 'Int'>
    readonly authorId: FieldRef<"recipe", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * recipe findUnique
   */
  export type recipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
    /**
     * Filter, which recipe to fetch.
     */
    where: recipeWhereUniqueInput
  }

  /**
   * recipe findUniqueOrThrow
   */
  export type recipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
    /**
     * Filter, which recipe to fetch.
     */
    where: recipeWhereUniqueInput
  }

  /**
   * recipe findFirst
   */
  export type recipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
    /**
     * Filter, which recipe to fetch.
     */
    where?: recipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipeOrderByWithRelationInput | recipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipes.
     */
    cursor?: recipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * recipe findFirstOrThrow
   */
  export type recipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
    /**
     * Filter, which recipe to fetch.
     */
    where?: recipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipeOrderByWithRelationInput | recipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipes.
     */
    cursor?: recipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * recipe findMany
   */
  export type recipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where?: recipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipeOrderByWithRelationInput | recipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recipes.
     */
    cursor?: recipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * recipe create
   */
  export type recipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
    /**
     * The data needed to create a recipe.
     */
    data: XOR<recipeCreateInput, recipeUncheckedCreateInput>
  }

  /**
   * recipe createMany
   */
  export type recipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recipes.
     */
    data: recipeCreateManyInput | recipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recipe createManyAndReturn
   */
  export type recipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * The data used to create many recipes.
     */
    data: recipeCreateManyInput | recipeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * recipe update
   */
  export type recipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
    /**
     * The data needed to update a recipe.
     */
    data: XOR<recipeUpdateInput, recipeUncheckedUpdateInput>
    /**
     * Choose, which recipe to update.
     */
    where: recipeWhereUniqueInput
  }

  /**
   * recipe updateMany
   */
  export type recipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recipes.
     */
    data: XOR<recipeUpdateManyMutationInput, recipeUncheckedUpdateManyInput>
    /**
     * Filter which recipes to update
     */
    where?: recipeWhereInput
    /**
     * Limit how many recipes to update.
     */
    limit?: number
  }

  /**
   * recipe updateManyAndReturn
   */
  export type recipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * The data used to update recipes.
     */
    data: XOR<recipeUpdateManyMutationInput, recipeUncheckedUpdateManyInput>
    /**
     * Filter which recipes to update
     */
    where?: recipeWhereInput
    /**
     * Limit how many recipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * recipe upsert
   */
  export type recipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
    /**
     * The filter to search for the recipe to update in case it exists.
     */
    where: recipeWhereUniqueInput
    /**
     * In case the recipe found by the `where` argument doesn't exist, create a new recipe with this data.
     */
    create: XOR<recipeCreateInput, recipeUncheckedCreateInput>
    /**
     * In case the recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recipeUpdateInput, recipeUncheckedUpdateInput>
  }

  /**
   * recipe delete
   */
  export type recipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
    /**
     * Filter which recipe to delete.
     */
    where: recipeWhereUniqueInput
  }

  /**
   * recipe deleteMany
   */
  export type recipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipes to delete
     */
    where?: recipeWhereInput
    /**
     * Limit how many recipes to delete.
     */
    limit?: number
  }

  /**
   * recipe.ingredients
   */
  export type recipe$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    where?: ingredientWhereInput
    orderBy?: ingredientOrderByWithRelationInput | ingredientOrderByWithRelationInput[]
    cursor?: ingredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * recipe.author
   */
  export type recipe$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * recipe.steps
   */
  export type recipe$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_step
     */
    select?: recipe_stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_step
     */
    omit?: recipe_stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_stepInclude<ExtArgs> | null
    where?: recipe_stepWhereInput
    orderBy?: recipe_stepOrderByWithRelationInput | recipe_stepOrderByWithRelationInput[]
    cursor?: recipe_stepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recipe_stepScalarFieldEnum | Recipe_stepScalarFieldEnum[]
  }

  /**
   * recipe.reviews
   */
  export type recipe$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * recipe without action
   */
  export type recipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe
     */
    select?: recipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe
     */
    omit?: recipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipeInclude<ExtArgs> | null
  }


  /**
   * Model ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientAvgAggregateOutputType = {
    id: number | null
    recipeId: number | null
  }

  export type IngredientSumAggregateOutputType = {
    id: number | null
    recipeId: number | null
  }

  export type IngredientMinAggregateOutputType = {
    item: string | null
    amount: string | null
    id: number | null
    recipeId: number | null
  }

  export type IngredientMaxAggregateOutputType = {
    item: string | null
    amount: string | null
    id: number | null
    recipeId: number | null
  }

  export type IngredientCountAggregateOutputType = {
    item: number
    amount: number
    id: number
    recipeId: number
    _all: number
  }


  export type IngredientAvgAggregateInputType = {
    id?: true
    recipeId?: true
  }

  export type IngredientSumAggregateInputType = {
    id?: true
    recipeId?: true
  }

  export type IngredientMinAggregateInputType = {
    item?: true
    amount?: true
    id?: true
    recipeId?: true
  }

  export type IngredientMaxAggregateInputType = {
    item?: true
    amount?: true
    id?: true
    recipeId?: true
  }

  export type IngredientCountAggregateInputType = {
    item?: true
    amount?: true
    id?: true
    recipeId?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingredient to aggregate.
     */
    where?: ingredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredients to fetch.
     */
    orderBy?: ingredientOrderByWithRelationInput | ingredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ingredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type ingredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ingredientWhereInput
    orderBy?: ingredientOrderByWithAggregationInput | ingredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: ingredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _avg?: IngredientAvgAggregateInputType
    _sum?: IngredientSumAggregateInputType
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    item: string
    amount: string
    id: number
    recipeId: number
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends ingredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type ingredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item?: boolean
    amount?: boolean
    id?: boolean
    recipeId?: boolean
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type ingredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item?: boolean
    amount?: boolean
    id?: boolean
    recipeId?: boolean
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type ingredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item?: boolean
    amount?: boolean
    id?: boolean
    recipeId?: boolean
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type ingredientSelectScalar = {
    item?: boolean
    amount?: boolean
    id?: boolean
    recipeId?: boolean
  }

  export type ingredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"item" | "amount" | "id" | "recipeId", ExtArgs["result"]["ingredient"]>
  export type ingredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }
  export type ingredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }
  export type ingredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }

  export type $ingredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ingredient"
    objects: {
      recipe: Prisma.$recipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      item: string
      amount: string
      id: number
      recipeId: number
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }

  type ingredientGetPayload<S extends boolean | null | undefined | ingredientDefaultArgs> = $Result.GetResult<Prisma.$ingredientPayload, S>

  type ingredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ingredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface ingredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ingredient'], meta: { name: 'ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {ingredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ingredientFindUniqueArgs>(args: SelectSubset<T, ingredientFindUniqueArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ingredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ingredientFindUniqueOrThrowArgs>(args: SelectSubset<T, ingredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ingredientFindFirstArgs>(args?: SelectSubset<T, ingredientFindFirstArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ingredientFindFirstOrThrowArgs>(args?: SelectSubset<T, ingredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `item`
     * const ingredientWithItemOnly = await prisma.ingredient.findMany({ select: { item: true } })
     * 
     */
    findMany<T extends ingredientFindManyArgs>(args?: SelectSubset<T, ingredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredient.
     * @param {ingredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
     */
    create<T extends ingredientCreateArgs>(args: SelectSubset<T, ingredientCreateArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {ingredientCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ingredientCreateManyArgs>(args?: SelectSubset<T, ingredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {ingredientCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `item`
     * const ingredientWithItemOnly = await prisma.ingredient.createManyAndReturn({
     *   select: { item: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ingredientCreateManyAndReturnArgs>(args?: SelectSubset<T, ingredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredient.
     * @param {ingredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
     */
    delete<T extends ingredientDeleteArgs>(args: SelectSubset<T, ingredientDeleteArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredient.
     * @param {ingredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ingredientUpdateArgs>(args: SelectSubset<T, ingredientUpdateArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {ingredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ingredientDeleteManyArgs>(args?: SelectSubset<T, ingredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ingredientUpdateManyArgs>(args: SelectSubset<T, ingredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {ingredientUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `item`
     * const ingredientWithItemOnly = await prisma.ingredient.updateManyAndReturn({
     *   select: { item: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ingredientUpdateManyAndReturnArgs>(args: SelectSubset<T, ingredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredient.
     * @param {ingredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends ingredientUpsertArgs>(args: SelectSubset<T, ingredientUpsertArgs<ExtArgs>>): Prisma__ingredientClient<$Result.GetResult<Prisma.$ingredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends ingredientCountArgs>(
      args?: Subset<T, ingredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ingredientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ingredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ingredientGroupByArgs['orderBy'] }
        : { orderBy?: ingredientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ingredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ingredient model
   */
  readonly fields: ingredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ingredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends recipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, recipeDefaultArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ingredient model
   */
  interface ingredientFieldRefs {
    readonly item: FieldRef<"ingredient", 'String'>
    readonly amount: FieldRef<"ingredient", 'String'>
    readonly id: FieldRef<"ingredient", 'Int'>
    readonly recipeId: FieldRef<"ingredient", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ingredient findUnique
   */
  export type ingredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * Filter, which ingredient to fetch.
     */
    where: ingredientWhereUniqueInput
  }

  /**
   * ingredient findUniqueOrThrow
   */
  export type ingredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * Filter, which ingredient to fetch.
     */
    where: ingredientWhereUniqueInput
  }

  /**
   * ingredient findFirst
   */
  export type ingredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * Filter, which ingredient to fetch.
     */
    where?: ingredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredients to fetch.
     */
    orderBy?: ingredientOrderByWithRelationInput | ingredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingredients.
     */
    cursor?: ingredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * ingredient findFirstOrThrow
   */
  export type ingredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * Filter, which ingredient to fetch.
     */
    where?: ingredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredients to fetch.
     */
    orderBy?: ingredientOrderByWithRelationInput | ingredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ingredients.
     */
    cursor?: ingredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * ingredient findMany
   */
  export type ingredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * Filter, which ingredients to fetch.
     */
    where?: ingredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ingredients to fetch.
     */
    orderBy?: ingredientOrderByWithRelationInput | ingredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ingredients.
     */
    cursor?: ingredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ingredients.
     */
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * ingredient create
   */
  export type ingredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * The data needed to create a ingredient.
     */
    data: XOR<ingredientCreateInput, ingredientUncheckedCreateInput>
  }

  /**
   * ingredient createMany
   */
  export type ingredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ingredients.
     */
    data: ingredientCreateManyInput | ingredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ingredient createManyAndReturn
   */
  export type ingredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * The data used to create many ingredients.
     */
    data: ingredientCreateManyInput | ingredientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ingredient update
   */
  export type ingredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * The data needed to update a ingredient.
     */
    data: XOR<ingredientUpdateInput, ingredientUncheckedUpdateInput>
    /**
     * Choose, which ingredient to update.
     */
    where: ingredientWhereUniqueInput
  }

  /**
   * ingredient updateMany
   */
  export type ingredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ingredients.
     */
    data: XOR<ingredientUpdateManyMutationInput, ingredientUncheckedUpdateManyInput>
    /**
     * Filter which ingredients to update
     */
    where?: ingredientWhereInput
    /**
     * Limit how many ingredients to update.
     */
    limit?: number
  }

  /**
   * ingredient updateManyAndReturn
   */
  export type ingredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * The data used to update ingredients.
     */
    data: XOR<ingredientUpdateManyMutationInput, ingredientUncheckedUpdateManyInput>
    /**
     * Filter which ingredients to update
     */
    where?: ingredientWhereInput
    /**
     * Limit how many ingredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ingredient upsert
   */
  export type ingredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * The filter to search for the ingredient to update in case it exists.
     */
    where: ingredientWhereUniqueInput
    /**
     * In case the ingredient found by the `where` argument doesn't exist, create a new ingredient with this data.
     */
    create: XOR<ingredientCreateInput, ingredientUncheckedCreateInput>
    /**
     * In case the ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ingredientUpdateInput, ingredientUncheckedUpdateInput>
  }

  /**
   * ingredient delete
   */
  export type ingredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
    /**
     * Filter which ingredient to delete.
     */
    where: ingredientWhereUniqueInput
  }

  /**
   * ingredient deleteMany
   */
  export type ingredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ingredients to delete
     */
    where?: ingredientWhereInput
    /**
     * Limit how many ingredients to delete.
     */
    limit?: number
  }

  /**
   * ingredient without action
   */
  export type ingredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ingredient
     */
    select?: ingredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ingredient
     */
    omit?: ingredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ingredientInclude<ExtArgs> | null
  }


  /**
   * Model recipe_step
   */

  export type AggregateRecipe_step = {
    _count: Recipe_stepCountAggregateOutputType | null
    _avg: Recipe_stepAvgAggregateOutputType | null
    _sum: Recipe_stepSumAggregateOutputType | null
    _min: Recipe_stepMinAggregateOutputType | null
    _max: Recipe_stepMaxAggregateOutputType | null
  }

  export type Recipe_stepAvgAggregateOutputType = {
    number: number | null
    id: number | null
    recipeId: number | null
  }

  export type Recipe_stepSumAggregateOutputType = {
    number: number | null
    id: number | null
    recipeId: number | null
  }

  export type Recipe_stepMinAggregateOutputType = {
    number: number | null
    title: string | null
    description: string | null
    id: number | null
    recipeId: number | null
  }

  export type Recipe_stepMaxAggregateOutputType = {
    number: number | null
    title: string | null
    description: string | null
    id: number | null
    recipeId: number | null
  }

  export type Recipe_stepCountAggregateOutputType = {
    number: number
    title: number
    description: number
    id: number
    recipeId: number
    _all: number
  }


  export type Recipe_stepAvgAggregateInputType = {
    number?: true
    id?: true
    recipeId?: true
  }

  export type Recipe_stepSumAggregateInputType = {
    number?: true
    id?: true
    recipeId?: true
  }

  export type Recipe_stepMinAggregateInputType = {
    number?: true
    title?: true
    description?: true
    id?: true
    recipeId?: true
  }

  export type Recipe_stepMaxAggregateInputType = {
    number?: true
    title?: true
    description?: true
    id?: true
    recipeId?: true
  }

  export type Recipe_stepCountAggregateInputType = {
    number?: true
    title?: true
    description?: true
    id?: true
    recipeId?: true
    _all?: true
  }

  export type Recipe_stepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipe_step to aggregate.
     */
    where?: recipe_stepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipe_steps to fetch.
     */
    orderBy?: recipe_stepOrderByWithRelationInput | recipe_stepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recipe_stepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipe_steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipe_steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recipe_steps
    **/
    _count?: true | Recipe_stepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Recipe_stepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Recipe_stepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Recipe_stepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Recipe_stepMaxAggregateInputType
  }

  export type GetRecipe_stepAggregateType<T extends Recipe_stepAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe_step]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe_step[P]>
      : GetScalarType<T[P], AggregateRecipe_step[P]>
  }




  export type recipe_stepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipe_stepWhereInput
    orderBy?: recipe_stepOrderByWithAggregationInput | recipe_stepOrderByWithAggregationInput[]
    by: Recipe_stepScalarFieldEnum[] | Recipe_stepScalarFieldEnum
    having?: recipe_stepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Recipe_stepCountAggregateInputType | true
    _avg?: Recipe_stepAvgAggregateInputType
    _sum?: Recipe_stepSumAggregateInputType
    _min?: Recipe_stepMinAggregateInputType
    _max?: Recipe_stepMaxAggregateInputType
  }

  export type Recipe_stepGroupByOutputType = {
    number: number
    title: string
    description: string
    id: number
    recipeId: number
    _count: Recipe_stepCountAggregateOutputType | null
    _avg: Recipe_stepAvgAggregateOutputType | null
    _sum: Recipe_stepSumAggregateOutputType | null
    _min: Recipe_stepMinAggregateOutputType | null
    _max: Recipe_stepMaxAggregateOutputType | null
  }

  type GetRecipe_stepGroupByPayload<T extends recipe_stepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Recipe_stepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Recipe_stepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Recipe_stepGroupByOutputType[P]>
            : GetScalarType<T[P], Recipe_stepGroupByOutputType[P]>
        }
      >
    >


  export type recipe_stepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    number?: boolean
    title?: boolean
    description?: boolean
    id?: boolean
    recipeId?: boolean
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe_step"]>

  export type recipe_stepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    number?: boolean
    title?: boolean
    description?: boolean
    id?: boolean
    recipeId?: boolean
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe_step"]>

  export type recipe_stepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    number?: boolean
    title?: boolean
    description?: boolean
    id?: boolean
    recipeId?: boolean
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe_step"]>

  export type recipe_stepSelectScalar = {
    number?: boolean
    title?: boolean
    description?: boolean
    id?: boolean
    recipeId?: boolean
  }

  export type recipe_stepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"number" | "title" | "description" | "id" | "recipeId", ExtArgs["result"]["recipe_step"]>
  export type recipe_stepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }
  export type recipe_stepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }
  export type recipe_stepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
  }

  export type $recipe_stepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recipe_step"
    objects: {
      recipe: Prisma.$recipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      number: number
      title: string
      description: string
      id: number
      recipeId: number
    }, ExtArgs["result"]["recipe_step"]>
    composites: {}
  }

  type recipe_stepGetPayload<S extends boolean | null | undefined | recipe_stepDefaultArgs> = $Result.GetResult<Prisma.$recipe_stepPayload, S>

  type recipe_stepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recipe_stepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Recipe_stepCountAggregateInputType | true
    }

  export interface recipe_stepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recipe_step'], meta: { name: 'recipe_step' } }
    /**
     * Find zero or one Recipe_step that matches the filter.
     * @param {recipe_stepFindUniqueArgs} args - Arguments to find a Recipe_step
     * @example
     * // Get one Recipe_step
     * const recipe_step = await prisma.recipe_step.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recipe_stepFindUniqueArgs>(args: SelectSubset<T, recipe_stepFindUniqueArgs<ExtArgs>>): Prisma__recipe_stepClient<$Result.GetResult<Prisma.$recipe_stepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe_step that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recipe_stepFindUniqueOrThrowArgs} args - Arguments to find a Recipe_step
     * @example
     * // Get one Recipe_step
     * const recipe_step = await prisma.recipe_step.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recipe_stepFindUniqueOrThrowArgs>(args: SelectSubset<T, recipe_stepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recipe_stepClient<$Result.GetResult<Prisma.$recipe_stepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe_step that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipe_stepFindFirstArgs} args - Arguments to find a Recipe_step
     * @example
     * // Get one Recipe_step
     * const recipe_step = await prisma.recipe_step.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recipe_stepFindFirstArgs>(args?: SelectSubset<T, recipe_stepFindFirstArgs<ExtArgs>>): Prisma__recipe_stepClient<$Result.GetResult<Prisma.$recipe_stepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe_step that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipe_stepFindFirstOrThrowArgs} args - Arguments to find a Recipe_step
     * @example
     * // Get one Recipe_step
     * const recipe_step = await prisma.recipe_step.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recipe_stepFindFirstOrThrowArgs>(args?: SelectSubset<T, recipe_stepFindFirstOrThrowArgs<ExtArgs>>): Prisma__recipe_stepClient<$Result.GetResult<Prisma.$recipe_stepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipe_steps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipe_stepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipe_steps
     * const recipe_steps = await prisma.recipe_step.findMany()
     * 
     * // Get first 10 Recipe_steps
     * const recipe_steps = await prisma.recipe_step.findMany({ take: 10 })
     * 
     * // Only select the `number`
     * const recipe_stepWithNumberOnly = await prisma.recipe_step.findMany({ select: { number: true } })
     * 
     */
    findMany<T extends recipe_stepFindManyArgs>(args?: SelectSubset<T, recipe_stepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipe_stepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe_step.
     * @param {recipe_stepCreateArgs} args - Arguments to create a Recipe_step.
     * @example
     * // Create one Recipe_step
     * const Recipe_step = await prisma.recipe_step.create({
     *   data: {
     *     // ... data to create a Recipe_step
     *   }
     * })
     * 
     */
    create<T extends recipe_stepCreateArgs>(args: SelectSubset<T, recipe_stepCreateArgs<ExtArgs>>): Prisma__recipe_stepClient<$Result.GetResult<Prisma.$recipe_stepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipe_steps.
     * @param {recipe_stepCreateManyArgs} args - Arguments to create many Recipe_steps.
     * @example
     * // Create many Recipe_steps
     * const recipe_step = await prisma.recipe_step.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recipe_stepCreateManyArgs>(args?: SelectSubset<T, recipe_stepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipe_steps and returns the data saved in the database.
     * @param {recipe_stepCreateManyAndReturnArgs} args - Arguments to create many Recipe_steps.
     * @example
     * // Create many Recipe_steps
     * const recipe_step = await prisma.recipe_step.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipe_steps and only return the `number`
     * const recipe_stepWithNumberOnly = await prisma.recipe_step.createManyAndReturn({
     *   select: { number: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends recipe_stepCreateManyAndReturnArgs>(args?: SelectSubset<T, recipe_stepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipe_stepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe_step.
     * @param {recipe_stepDeleteArgs} args - Arguments to delete one Recipe_step.
     * @example
     * // Delete one Recipe_step
     * const Recipe_step = await prisma.recipe_step.delete({
     *   where: {
     *     // ... filter to delete one Recipe_step
     *   }
     * })
     * 
     */
    delete<T extends recipe_stepDeleteArgs>(args: SelectSubset<T, recipe_stepDeleteArgs<ExtArgs>>): Prisma__recipe_stepClient<$Result.GetResult<Prisma.$recipe_stepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe_step.
     * @param {recipe_stepUpdateArgs} args - Arguments to update one Recipe_step.
     * @example
     * // Update one Recipe_step
     * const recipe_step = await prisma.recipe_step.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recipe_stepUpdateArgs>(args: SelectSubset<T, recipe_stepUpdateArgs<ExtArgs>>): Prisma__recipe_stepClient<$Result.GetResult<Prisma.$recipe_stepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipe_steps.
     * @param {recipe_stepDeleteManyArgs} args - Arguments to filter Recipe_steps to delete.
     * @example
     * // Delete a few Recipe_steps
     * const { count } = await prisma.recipe_step.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recipe_stepDeleteManyArgs>(args?: SelectSubset<T, recipe_stepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipe_steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipe_stepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipe_steps
     * const recipe_step = await prisma.recipe_step.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recipe_stepUpdateManyArgs>(args: SelectSubset<T, recipe_stepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipe_steps and returns the data updated in the database.
     * @param {recipe_stepUpdateManyAndReturnArgs} args - Arguments to update many Recipe_steps.
     * @example
     * // Update many Recipe_steps
     * const recipe_step = await prisma.recipe_step.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipe_steps and only return the `number`
     * const recipe_stepWithNumberOnly = await prisma.recipe_step.updateManyAndReturn({
     *   select: { number: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends recipe_stepUpdateManyAndReturnArgs>(args: SelectSubset<T, recipe_stepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipe_stepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe_step.
     * @param {recipe_stepUpsertArgs} args - Arguments to update or create a Recipe_step.
     * @example
     * // Update or create a Recipe_step
     * const recipe_step = await prisma.recipe_step.upsert({
     *   create: {
     *     // ... data to create a Recipe_step
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe_step we want to update
     *   }
     * })
     */
    upsert<T extends recipe_stepUpsertArgs>(args: SelectSubset<T, recipe_stepUpsertArgs<ExtArgs>>): Prisma__recipe_stepClient<$Result.GetResult<Prisma.$recipe_stepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipe_steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipe_stepCountArgs} args - Arguments to filter Recipe_steps to count.
     * @example
     * // Count the number of Recipe_steps
     * const count = await prisma.recipe_step.count({
     *   where: {
     *     // ... the filter for the Recipe_steps we want to count
     *   }
     * })
    **/
    count<T extends recipe_stepCountArgs>(
      args?: Subset<T, recipe_stepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Recipe_stepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe_step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_stepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Recipe_stepAggregateArgs>(args: Subset<T, Recipe_stepAggregateArgs>): Prisma.PrismaPromise<GetRecipe_stepAggregateType<T>>

    /**
     * Group by Recipe_step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipe_stepGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends recipe_stepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recipe_stepGroupByArgs['orderBy'] }
        : { orderBy?: recipe_stepGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, recipe_stepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipe_stepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recipe_step model
   */
  readonly fields: recipe_stepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recipe_step.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recipe_stepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends recipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, recipeDefaultArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the recipe_step model
   */
  interface recipe_stepFieldRefs {
    readonly number: FieldRef<"recipe_step", 'Int'>
    readonly title: FieldRef<"recipe_step", 'String'>
    readonly description: FieldRef<"recipe_step", 'String'>
    readonly id: FieldRef<"recipe_step", 'Int'>
    readonly recipeId: FieldRef<"recipe_step", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * recipe_step findUnique
   */
  export type recipe_stepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_step
     */
    select?: recipe_stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_step
     */
    omit?: recipe_stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_stepInclude<ExtArgs> | null
    /**
     * Filter, which recipe_step to fetch.
     */
    where: recipe_stepWhereUniqueInput
  }

  /**
   * recipe_step findUniqueOrThrow
   */
  export type recipe_stepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_step
     */
    select?: recipe_stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_step
     */
    omit?: recipe_stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_stepInclude<ExtArgs> | null
    /**
     * Filter, which recipe_step to fetch.
     */
    where: recipe_stepWhereUniqueInput
  }

  /**
   * recipe_step findFirst
   */
  export type recipe_stepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_step
     */
    select?: recipe_stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_step
     */
    omit?: recipe_stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_stepInclude<ExtArgs> | null
    /**
     * Filter, which recipe_step to fetch.
     */
    where?: recipe_stepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipe_steps to fetch.
     */
    orderBy?: recipe_stepOrderByWithRelationInput | recipe_stepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipe_steps.
     */
    cursor?: recipe_stepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipe_steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipe_steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipe_steps.
     */
    distinct?: Recipe_stepScalarFieldEnum | Recipe_stepScalarFieldEnum[]
  }

  /**
   * recipe_step findFirstOrThrow
   */
  export type recipe_stepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_step
     */
    select?: recipe_stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_step
     */
    omit?: recipe_stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_stepInclude<ExtArgs> | null
    /**
     * Filter, which recipe_step to fetch.
     */
    where?: recipe_stepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipe_steps to fetch.
     */
    orderBy?: recipe_stepOrderByWithRelationInput | recipe_stepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipe_steps.
     */
    cursor?: recipe_stepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipe_steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipe_steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipe_steps.
     */
    distinct?: Recipe_stepScalarFieldEnum | Recipe_stepScalarFieldEnum[]
  }

  /**
   * recipe_step findMany
   */
  export type recipe_stepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_step
     */
    select?: recipe_stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_step
     */
    omit?: recipe_stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_stepInclude<ExtArgs> | null
    /**
     * Filter, which recipe_steps to fetch.
     */
    where?: recipe_stepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipe_steps to fetch.
     */
    orderBy?: recipe_stepOrderByWithRelationInput | recipe_stepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recipe_steps.
     */
    cursor?: recipe_stepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipe_steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipe_steps.
     */
    skip?: number
    distinct?: Recipe_stepScalarFieldEnum | Recipe_stepScalarFieldEnum[]
  }

  /**
   * recipe_step create
   */
  export type recipe_stepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_step
     */
    select?: recipe_stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_step
     */
    omit?: recipe_stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_stepInclude<ExtArgs> | null
    /**
     * The data needed to create a recipe_step.
     */
    data: XOR<recipe_stepCreateInput, recipe_stepUncheckedCreateInput>
  }

  /**
   * recipe_step createMany
   */
  export type recipe_stepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recipe_steps.
     */
    data: recipe_stepCreateManyInput | recipe_stepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recipe_step createManyAndReturn
   */
  export type recipe_stepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_step
     */
    select?: recipe_stepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_step
     */
    omit?: recipe_stepOmit<ExtArgs> | null
    /**
     * The data used to create many recipe_steps.
     */
    data: recipe_stepCreateManyInput | recipe_stepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_stepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * recipe_step update
   */
  export type recipe_stepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_step
     */
    select?: recipe_stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_step
     */
    omit?: recipe_stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_stepInclude<ExtArgs> | null
    /**
     * The data needed to update a recipe_step.
     */
    data: XOR<recipe_stepUpdateInput, recipe_stepUncheckedUpdateInput>
    /**
     * Choose, which recipe_step to update.
     */
    where: recipe_stepWhereUniqueInput
  }

  /**
   * recipe_step updateMany
   */
  export type recipe_stepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recipe_steps.
     */
    data: XOR<recipe_stepUpdateManyMutationInput, recipe_stepUncheckedUpdateManyInput>
    /**
     * Filter which recipe_steps to update
     */
    where?: recipe_stepWhereInput
    /**
     * Limit how many recipe_steps to update.
     */
    limit?: number
  }

  /**
   * recipe_step updateManyAndReturn
   */
  export type recipe_stepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_step
     */
    select?: recipe_stepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_step
     */
    omit?: recipe_stepOmit<ExtArgs> | null
    /**
     * The data used to update recipe_steps.
     */
    data: XOR<recipe_stepUpdateManyMutationInput, recipe_stepUncheckedUpdateManyInput>
    /**
     * Filter which recipe_steps to update
     */
    where?: recipe_stepWhereInput
    /**
     * Limit how many recipe_steps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_stepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * recipe_step upsert
   */
  export type recipe_stepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_step
     */
    select?: recipe_stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_step
     */
    omit?: recipe_stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_stepInclude<ExtArgs> | null
    /**
     * The filter to search for the recipe_step to update in case it exists.
     */
    where: recipe_stepWhereUniqueInput
    /**
     * In case the recipe_step found by the `where` argument doesn't exist, create a new recipe_step with this data.
     */
    create: XOR<recipe_stepCreateInput, recipe_stepUncheckedCreateInput>
    /**
     * In case the recipe_step was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recipe_stepUpdateInput, recipe_stepUncheckedUpdateInput>
  }

  /**
   * recipe_step delete
   */
  export type recipe_stepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_step
     */
    select?: recipe_stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_step
     */
    omit?: recipe_stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_stepInclude<ExtArgs> | null
    /**
     * Filter which recipe_step to delete.
     */
    where: recipe_stepWhereUniqueInput
  }

  /**
   * recipe_step deleteMany
   */
  export type recipe_stepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipe_steps to delete
     */
    where?: recipe_stepWhereInput
    /**
     * Limit how many recipe_steps to delete.
     */
    limit?: number
  }

  /**
   * recipe_step without action
   */
  export type recipe_stepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_step
     */
    select?: recipe_stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_step
     */
    omit?: recipe_stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_stepInclude<ExtArgs> | null
  }


  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
    id: number | null
    userId: number | null
    recipeId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
    id: number | null
    userId: number | null
    recipeId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
    id: number | null
    userId: number | null
    recipeId: number | null
  }

  export type ReviewMaxAggregateOutputType = {
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
    id: number | null
    userId: number | null
    recipeId: number | null
  }

  export type ReviewCountAggregateOutputType = {
    rating: number
    comment: number
    createdAt: number
    updatedAt: number
    id: number
    userId: number
    recipeId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
    id?: true
    userId?: true
    recipeId?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
    id?: true
    userId?: true
    recipeId?: true
  }

  export type ReviewMinAggregateInputType = {
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    id?: true
    userId?: true
    recipeId?: true
  }

  export type ReviewMaxAggregateInputType = {
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    id?: true
    userId?: true
    recipeId?: true
  }

  export type ReviewCountAggregateInputType = {
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    id?: true
    userId?: true
    recipeId?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: reviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    rating: number
    comment: string | null
    createdAt: Date
    updatedAt: Date
    id: number
    userId: number
    recipeId: number
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectScalar = {
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    id?: boolean
    userId?: boolean
    recipeId?: boolean
  }

  export type reviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"rating" | "comment" | "createdAt" | "updatedAt" | "id" | "userId" | "recipeId", ExtArgs["result"]["review"]>
  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type reviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type reviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | recipeDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "review"
    objects: {
      recipe: Prisma.$recipePayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      rating: number
      comment: string | null
      createdAt: Date
      updatedAt: Date
      id: number
      userId: number
      recipeId: number
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<Prisma.$reviewPayload, S>

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review'], meta: { name: 'review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewFindUniqueArgs>(args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewFindFirstArgs>(args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `rating`
     * const reviewWithRatingOnly = await prisma.review.findMany({ select: { rating: true } })
     * 
     */
    findMany<T extends reviewFindManyArgs>(args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends reviewCreateArgs>(args: SelectSubset<T, reviewCreateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewCreateManyArgs>(args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {reviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `rating`
     * const reviewWithRatingOnly = await prisma.review.createManyAndReturn({
     *   select: { rating: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reviewCreateManyAndReturnArgs>(args?: SelectSubset<T, reviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends reviewDeleteArgs>(args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewUpdateArgs>(args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewDeleteManyArgs>(args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewUpdateManyArgs>(args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {reviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `rating`
     * const reviewWithRatingOnly = await prisma.review.updateManyAndReturn({
     *   select: { rating: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reviewUpdateManyAndReturnArgs>(args: SelectSubset<T, reviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends reviewUpsertArgs>(args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the review model
   */
  readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends recipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, recipeDefaultArgs<ExtArgs>>): Prisma__recipeClient<$Result.GetResult<Prisma.$recipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly rating: FieldRef<"review", 'Float'>
    readonly comment: FieldRef<"review", 'String'>
    readonly createdAt: FieldRef<"review", 'DateTime'>
    readonly updatedAt: FieldRef<"review", 'DateTime'>
    readonly id: FieldRef<"review", 'Int'>
    readonly userId: FieldRef<"review", 'Int'>
    readonly recipeId: FieldRef<"review", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>
  }

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * review createManyAndReturn
   */
  export type reviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * review updateManyAndReturn
   */
  export type reviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
  }

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    id: 'id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    name: 'name',
    id: 'id'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const RecipeScalarFieldEnum: {
    title: 'title',
    image: 'image',
    time: 'time',
    difficulty: 'difficulty',
    calories: 'calories',
    servings: 'servings',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    id: 'id',
    categoryId: 'categoryId',
    authorId: 'authorId'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const IngredientScalarFieldEnum: {
    item: 'item',
    amount: 'amount',
    id: 'id',
    recipeId: 'recipeId'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const Recipe_stepScalarFieldEnum: {
    number: 'number',
    title: 'title',
    description: 'description',
    id: 'id',
    recipeId: 'recipeId'
  };

  export type Recipe_stepScalarFieldEnum = (typeof Recipe_stepScalarFieldEnum)[keyof typeof Recipe_stepScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    id: 'id',
    userId: 'userId',
    recipeId: 'recipeId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    role?: StringFilter<"user"> | string
    id?: IntFilter<"user"> | number
    recipes?: RecipeListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    id?: SortOrder
    recipes?: recipeOrderByRelationAggregateInput
    reviews?: reviewOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    id?: number
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    role?: StringFilter<"user"> | string
    recipes?: RecipeListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    id?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    role?: StringWithAggregatesFilter<"user"> | string
    id?: IntWithAggregatesFilter<"user"> | number
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    name?: StringFilter<"category"> | string
    id?: IntFilter<"category"> | number
    recipes?: RecipeListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    name?: SortOrder
    id?: SortOrder
    recipes?: recipeOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    id?: number
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    recipes?: RecipeListRelationFilter
  }, "id" | "name">

  export type categoryOrderByWithAggregationInput = {
    name?: SortOrder
    id?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"category"> | string
    id?: IntWithAggregatesFilter<"category"> | number
  }

  export type recipeWhereInput = {
    AND?: recipeWhereInput | recipeWhereInput[]
    OR?: recipeWhereInput[]
    NOT?: recipeWhereInput | recipeWhereInput[]
    title?: StringFilter<"recipe"> | string
    image?: StringFilter<"recipe"> | string
    time?: IntFilter<"recipe"> | number
    difficulty?: StringFilter<"recipe"> | string
    calories?: IntFilter<"recipe"> | number
    servings?: IntNullableFilter<"recipe"> | number | null
    description?: StringNullableFilter<"recipe"> | string | null
    createdAt?: DateTimeFilter<"recipe"> | Date | string
    updatedAt?: DateTimeFilter<"recipe"> | Date | string
    id?: IntFilter<"recipe"> | number
    categoryId?: IntFilter<"recipe"> | number
    authorId?: IntNullableFilter<"recipe"> | number | null
    ingredients?: IngredientListRelationFilter
    author?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    steps?: Recipe_stepListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type recipeOrderByWithRelationInput = {
    title?: SortOrder
    image?: SortOrder
    time?: SortOrder
    difficulty?: SortOrder
    calories?: SortOrder
    servings?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    categoryId?: SortOrder
    authorId?: SortOrderInput | SortOrder
    ingredients?: ingredientOrderByRelationAggregateInput
    author?: userOrderByWithRelationInput
    category?: categoryOrderByWithRelationInput
    steps?: recipe_stepOrderByRelationAggregateInput
    reviews?: reviewOrderByRelationAggregateInput
  }

  export type recipeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: recipeWhereInput | recipeWhereInput[]
    OR?: recipeWhereInput[]
    NOT?: recipeWhereInput | recipeWhereInput[]
    title?: StringFilter<"recipe"> | string
    image?: StringFilter<"recipe"> | string
    time?: IntFilter<"recipe"> | number
    difficulty?: StringFilter<"recipe"> | string
    calories?: IntFilter<"recipe"> | number
    servings?: IntNullableFilter<"recipe"> | number | null
    description?: StringNullableFilter<"recipe"> | string | null
    createdAt?: DateTimeFilter<"recipe"> | Date | string
    updatedAt?: DateTimeFilter<"recipe"> | Date | string
    categoryId?: IntFilter<"recipe"> | number
    authorId?: IntNullableFilter<"recipe"> | number | null
    ingredients?: IngredientListRelationFilter
    author?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    steps?: Recipe_stepListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id">

  export type recipeOrderByWithAggregationInput = {
    title?: SortOrder
    image?: SortOrder
    time?: SortOrder
    difficulty?: SortOrder
    calories?: SortOrder
    servings?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    categoryId?: SortOrder
    authorId?: SortOrderInput | SortOrder
    _count?: recipeCountOrderByAggregateInput
    _avg?: recipeAvgOrderByAggregateInput
    _max?: recipeMaxOrderByAggregateInput
    _min?: recipeMinOrderByAggregateInput
    _sum?: recipeSumOrderByAggregateInput
  }

  export type recipeScalarWhereWithAggregatesInput = {
    AND?: recipeScalarWhereWithAggregatesInput | recipeScalarWhereWithAggregatesInput[]
    OR?: recipeScalarWhereWithAggregatesInput[]
    NOT?: recipeScalarWhereWithAggregatesInput | recipeScalarWhereWithAggregatesInput[]
    title?: StringWithAggregatesFilter<"recipe"> | string
    image?: StringWithAggregatesFilter<"recipe"> | string
    time?: IntWithAggregatesFilter<"recipe"> | number
    difficulty?: StringWithAggregatesFilter<"recipe"> | string
    calories?: IntWithAggregatesFilter<"recipe"> | number
    servings?: IntNullableWithAggregatesFilter<"recipe"> | number | null
    description?: StringNullableWithAggregatesFilter<"recipe"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"recipe"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"recipe"> | Date | string
    id?: IntWithAggregatesFilter<"recipe"> | number
    categoryId?: IntWithAggregatesFilter<"recipe"> | number
    authorId?: IntNullableWithAggregatesFilter<"recipe"> | number | null
  }

  export type ingredientWhereInput = {
    AND?: ingredientWhereInput | ingredientWhereInput[]
    OR?: ingredientWhereInput[]
    NOT?: ingredientWhereInput | ingredientWhereInput[]
    item?: StringFilter<"ingredient"> | string
    amount?: StringFilter<"ingredient"> | string
    id?: IntFilter<"ingredient"> | number
    recipeId?: IntFilter<"ingredient"> | number
    recipe?: XOR<RecipeScalarRelationFilter, recipeWhereInput>
  }

  export type ingredientOrderByWithRelationInput = {
    item?: SortOrder
    amount?: SortOrder
    id?: SortOrder
    recipeId?: SortOrder
    recipe?: recipeOrderByWithRelationInput
  }

  export type ingredientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ingredientWhereInput | ingredientWhereInput[]
    OR?: ingredientWhereInput[]
    NOT?: ingredientWhereInput | ingredientWhereInput[]
    item?: StringFilter<"ingredient"> | string
    amount?: StringFilter<"ingredient"> | string
    recipeId?: IntFilter<"ingredient"> | number
    recipe?: XOR<RecipeScalarRelationFilter, recipeWhereInput>
  }, "id">

  export type ingredientOrderByWithAggregationInput = {
    item?: SortOrder
    amount?: SortOrder
    id?: SortOrder
    recipeId?: SortOrder
    _count?: ingredientCountOrderByAggregateInput
    _avg?: ingredientAvgOrderByAggregateInput
    _max?: ingredientMaxOrderByAggregateInput
    _min?: ingredientMinOrderByAggregateInput
    _sum?: ingredientSumOrderByAggregateInput
  }

  export type ingredientScalarWhereWithAggregatesInput = {
    AND?: ingredientScalarWhereWithAggregatesInput | ingredientScalarWhereWithAggregatesInput[]
    OR?: ingredientScalarWhereWithAggregatesInput[]
    NOT?: ingredientScalarWhereWithAggregatesInput | ingredientScalarWhereWithAggregatesInput[]
    item?: StringWithAggregatesFilter<"ingredient"> | string
    amount?: StringWithAggregatesFilter<"ingredient"> | string
    id?: IntWithAggregatesFilter<"ingredient"> | number
    recipeId?: IntWithAggregatesFilter<"ingredient"> | number
  }

  export type recipe_stepWhereInput = {
    AND?: recipe_stepWhereInput | recipe_stepWhereInput[]
    OR?: recipe_stepWhereInput[]
    NOT?: recipe_stepWhereInput | recipe_stepWhereInput[]
    number?: IntFilter<"recipe_step"> | number
    title?: StringFilter<"recipe_step"> | string
    description?: StringFilter<"recipe_step"> | string
    id?: IntFilter<"recipe_step"> | number
    recipeId?: IntFilter<"recipe_step"> | number
    recipe?: XOR<RecipeScalarRelationFilter, recipeWhereInput>
  }

  export type recipe_stepOrderByWithRelationInput = {
    number?: SortOrder
    title?: SortOrder
    description?: SortOrder
    id?: SortOrder
    recipeId?: SortOrder
    recipe?: recipeOrderByWithRelationInput
  }

  export type recipe_stepWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: recipe_stepWhereInput | recipe_stepWhereInput[]
    OR?: recipe_stepWhereInput[]
    NOT?: recipe_stepWhereInput | recipe_stepWhereInput[]
    number?: IntFilter<"recipe_step"> | number
    title?: StringFilter<"recipe_step"> | string
    description?: StringFilter<"recipe_step"> | string
    recipeId?: IntFilter<"recipe_step"> | number
    recipe?: XOR<RecipeScalarRelationFilter, recipeWhereInput>
  }, "id">

  export type recipe_stepOrderByWithAggregationInput = {
    number?: SortOrder
    title?: SortOrder
    description?: SortOrder
    id?: SortOrder
    recipeId?: SortOrder
    _count?: recipe_stepCountOrderByAggregateInput
    _avg?: recipe_stepAvgOrderByAggregateInput
    _max?: recipe_stepMaxOrderByAggregateInput
    _min?: recipe_stepMinOrderByAggregateInput
    _sum?: recipe_stepSumOrderByAggregateInput
  }

  export type recipe_stepScalarWhereWithAggregatesInput = {
    AND?: recipe_stepScalarWhereWithAggregatesInput | recipe_stepScalarWhereWithAggregatesInput[]
    OR?: recipe_stepScalarWhereWithAggregatesInput[]
    NOT?: recipe_stepScalarWhereWithAggregatesInput | recipe_stepScalarWhereWithAggregatesInput[]
    number?: IntWithAggregatesFilter<"recipe_step"> | number
    title?: StringWithAggregatesFilter<"recipe_step"> | string
    description?: StringWithAggregatesFilter<"recipe_step"> | string
    id?: IntWithAggregatesFilter<"recipe_step"> | number
    recipeId?: IntWithAggregatesFilter<"recipe_step"> | number
  }

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    rating?: FloatFilter<"review"> | number
    comment?: StringNullableFilter<"review"> | string | null
    createdAt?: DateTimeFilter<"review"> | Date | string
    updatedAt?: DateTimeFilter<"review"> | Date | string
    id?: IntFilter<"review"> | number
    userId?: IntFilter<"review"> | number
    recipeId?: IntFilter<"review"> | number
    recipe?: XOR<RecipeScalarRelationFilter, recipeWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type reviewOrderByWithRelationInput = {
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    recipe?: recipeOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type reviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_recipeId?: reviewUserIdRecipeIdCompoundUniqueInput
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    rating?: FloatFilter<"review"> | number
    comment?: StringNullableFilter<"review"> | string | null
    createdAt?: DateTimeFilter<"review"> | Date | string
    updatedAt?: DateTimeFilter<"review"> | Date | string
    userId?: IntFilter<"review"> | number
    recipeId?: IntFilter<"review"> | number
    recipe?: XOR<RecipeScalarRelationFilter, recipeWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "userId_recipeId">

  export type reviewOrderByWithAggregationInput = {
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    _count?: reviewCountOrderByAggregateInput
    _avg?: reviewAvgOrderByAggregateInput
    _max?: reviewMaxOrderByAggregateInput
    _min?: reviewMinOrderByAggregateInput
    _sum?: reviewSumOrderByAggregateInput
  }

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    OR?: reviewScalarWhereWithAggregatesInput[]
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    rating?: FloatWithAggregatesFilter<"review"> | number
    comment?: StringNullableWithAggregatesFilter<"review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"review"> | Date | string
    id?: IntWithAggregatesFilter<"review"> | number
    userId?: IntWithAggregatesFilter<"review"> | number
    recipeId?: IntWithAggregatesFilter<"review"> | number
  }

  export type userCreateInput = {
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    recipes?: recipeCreateNestedManyWithoutAuthorInput
    reviews?: reviewCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    id?: number
    recipes?: recipeUncheckedCreateNestedManyWithoutAuthorInput
    reviews?: reviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    recipes?: recipeUpdateManyWithoutAuthorNestedInput
    reviews?: reviewUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    recipes?: recipeUncheckedUpdateManyWithoutAuthorNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    id?: number
  }

  export type userUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type categoryCreateInput = {
    name: string
    recipes?: recipeCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    name: string
    id?: number
    recipes?: recipeUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    recipes?: recipeUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    recipes?: recipeUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    name: string
    id?: number
  }

  export type categoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type recipeCreateInput = {
    title: string
    image: string
    time: number
    difficulty: string
    calories: number
    servings?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: ingredientCreateNestedManyWithoutRecipeInput
    author?: userCreateNestedOneWithoutRecipesInput
    category: categoryCreateNestedOneWithoutRecipesInput
    steps?: recipe_stepCreateNestedManyWithoutRecipeInput
    reviews?: reviewCreateNestedManyWithoutRecipeInput
  }

  export type recipeUncheckedCreateInput = {
    title: string
    image: string
    time: number
    difficulty: string
    calories: number
    servings?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: number
    categoryId: number
    authorId?: number | null
    ingredients?: ingredientUncheckedCreateNestedManyWithoutRecipeInput
    steps?: recipe_stepUncheckedCreateNestedManyWithoutRecipeInput
    reviews?: reviewUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type recipeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: ingredientUpdateManyWithoutRecipeNestedInput
    author?: userUpdateOneWithoutRecipesNestedInput
    category?: categoryUpdateOneRequiredWithoutRecipesNestedInput
    steps?: recipe_stepUpdateManyWithoutRecipeNestedInput
    reviews?: reviewUpdateManyWithoutRecipeNestedInput
  }

  export type recipeUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    ingredients?: ingredientUncheckedUpdateManyWithoutRecipeNestedInput
    steps?: recipe_stepUncheckedUpdateManyWithoutRecipeNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type recipeCreateManyInput = {
    title: string
    image: string
    time: number
    difficulty: string
    calories: number
    servings?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: number
    categoryId: number
    authorId?: number | null
  }

  export type recipeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recipeUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ingredientCreateInput = {
    item: string
    amount: string
    recipe: recipeCreateNestedOneWithoutIngredientsInput
  }

  export type ingredientUncheckedCreateInput = {
    item: string
    amount: string
    id?: number
    recipeId: number
  }

  export type ingredientUpdateInput = {
    item?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    recipe?: recipeUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type ingredientUncheckedUpdateInput = {
    item?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type ingredientCreateManyInput = {
    item: string
    amount: string
    id?: number
    recipeId: number
  }

  export type ingredientUpdateManyMutationInput = {
    item?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
  }

  export type ingredientUncheckedUpdateManyInput = {
    item?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type recipe_stepCreateInput = {
    number: number
    title: string
    description: string
    recipe: recipeCreateNestedOneWithoutStepsInput
  }

  export type recipe_stepUncheckedCreateInput = {
    number: number
    title: string
    description: string
    id?: number
    recipeId: number
  }

  export type recipe_stepUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recipe?: recipeUpdateOneRequiredWithoutStepsNestedInput
  }

  export type recipe_stepUncheckedUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type recipe_stepCreateManyInput = {
    number: number
    title: string
    description: string
    id?: number
    recipeId: number
  }

  export type recipe_stepUpdateManyMutationInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type recipe_stepUncheckedUpdateManyInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type reviewCreateInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipe: recipeCreateNestedOneWithoutReviewsInput
    user: userCreateNestedOneWithoutReviewsInput
  }

  export type reviewUncheckedCreateInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: number
    userId: number
    recipeId: number
  }

  export type reviewUpdateInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: recipeUpdateOneRequiredWithoutReviewsNestedInput
    user?: userUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewUncheckedUpdateInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type reviewCreateManyInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: number
    userId: number
    recipeId: number
  }

  export type reviewUpdateManyMutationInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUncheckedUpdateManyInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RecipeListRelationFilter = {
    every?: recipeWhereInput
    some?: recipeWhereInput
    none?: recipeWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput
    some?: reviewWhereInput
    none?: reviewWhereInput
  }

  export type recipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    id?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    id?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    id?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type categoryCountOrderByAggregateInput = {
    name?: SortOrder
    id?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    name?: SortOrder
    id?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    name?: SortOrder
    id?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IngredientListRelationFilter = {
    every?: ingredientWhereInput
    some?: ingredientWhereInput
    none?: ingredientWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type CategoryScalarRelationFilter = {
    is?: categoryWhereInput
    isNot?: categoryWhereInput
  }

  export type Recipe_stepListRelationFilter = {
    every?: recipe_stepWhereInput
    some?: recipe_stepWhereInput
    none?: recipe_stepWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ingredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type recipe_stepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type recipeCountOrderByAggregateInput = {
    title?: SortOrder
    image?: SortOrder
    time?: SortOrder
    difficulty?: SortOrder
    calories?: SortOrder
    servings?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    categoryId?: SortOrder
    authorId?: SortOrder
  }

  export type recipeAvgOrderByAggregateInput = {
    time?: SortOrder
    calories?: SortOrder
    servings?: SortOrder
    id?: SortOrder
    categoryId?: SortOrder
    authorId?: SortOrder
  }

  export type recipeMaxOrderByAggregateInput = {
    title?: SortOrder
    image?: SortOrder
    time?: SortOrder
    difficulty?: SortOrder
    calories?: SortOrder
    servings?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    categoryId?: SortOrder
    authorId?: SortOrder
  }

  export type recipeMinOrderByAggregateInput = {
    title?: SortOrder
    image?: SortOrder
    time?: SortOrder
    difficulty?: SortOrder
    calories?: SortOrder
    servings?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    categoryId?: SortOrder
    authorId?: SortOrder
  }

  export type recipeSumOrderByAggregateInput = {
    time?: SortOrder
    calories?: SortOrder
    servings?: SortOrder
    id?: SortOrder
    categoryId?: SortOrder
    authorId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RecipeScalarRelationFilter = {
    is?: recipeWhereInput
    isNot?: recipeWhereInput
  }

  export type ingredientCountOrderByAggregateInput = {
    item?: SortOrder
    amount?: SortOrder
    id?: SortOrder
    recipeId?: SortOrder
  }

  export type ingredientAvgOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
  }

  export type ingredientMaxOrderByAggregateInput = {
    item?: SortOrder
    amount?: SortOrder
    id?: SortOrder
    recipeId?: SortOrder
  }

  export type ingredientMinOrderByAggregateInput = {
    item?: SortOrder
    amount?: SortOrder
    id?: SortOrder
    recipeId?: SortOrder
  }

  export type ingredientSumOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
  }

  export type recipe_stepCountOrderByAggregateInput = {
    number?: SortOrder
    title?: SortOrder
    description?: SortOrder
    id?: SortOrder
    recipeId?: SortOrder
  }

  export type recipe_stepAvgOrderByAggregateInput = {
    number?: SortOrder
    id?: SortOrder
    recipeId?: SortOrder
  }

  export type recipe_stepMaxOrderByAggregateInput = {
    number?: SortOrder
    title?: SortOrder
    description?: SortOrder
    id?: SortOrder
    recipeId?: SortOrder
  }

  export type recipe_stepMinOrderByAggregateInput = {
    number?: SortOrder
    title?: SortOrder
    description?: SortOrder
    id?: SortOrder
    recipeId?: SortOrder
  }

  export type recipe_stepSumOrderByAggregateInput = {
    number?: SortOrder
    id?: SortOrder
    recipeId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type reviewUserIdRecipeIdCompoundUniqueInput = {
    userId: number
    recipeId: number
  }

  export type reviewCountOrderByAggregateInput = {
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
  }

  export type reviewAvgOrderByAggregateInput = {
    rating?: SortOrder
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
  }

  export type reviewMaxOrderByAggregateInput = {
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
  }

  export type reviewMinOrderByAggregateInput = {
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
  }

  export type reviewSumOrderByAggregateInput = {
    rating?: SortOrder
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type recipeCreateNestedManyWithoutAuthorInput = {
    create?: XOR<recipeCreateWithoutAuthorInput, recipeUncheckedCreateWithoutAuthorInput> | recipeCreateWithoutAuthorInput[] | recipeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: recipeCreateOrConnectWithoutAuthorInput | recipeCreateOrConnectWithoutAuthorInput[]
    createMany?: recipeCreateManyAuthorInputEnvelope
    connect?: recipeWhereUniqueInput | recipeWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutUserInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type recipeUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<recipeCreateWithoutAuthorInput, recipeUncheckedCreateWithoutAuthorInput> | recipeCreateWithoutAuthorInput[] | recipeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: recipeCreateOrConnectWithoutAuthorInput | recipeCreateOrConnectWithoutAuthorInput[]
    createMany?: recipeCreateManyAuthorInputEnvelope
    connect?: recipeWhereUniqueInput | recipeWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type recipeUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<recipeCreateWithoutAuthorInput, recipeUncheckedCreateWithoutAuthorInput> | recipeCreateWithoutAuthorInput[] | recipeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: recipeCreateOrConnectWithoutAuthorInput | recipeCreateOrConnectWithoutAuthorInput[]
    upsert?: recipeUpsertWithWhereUniqueWithoutAuthorInput | recipeUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: recipeCreateManyAuthorInputEnvelope
    set?: recipeWhereUniqueInput | recipeWhereUniqueInput[]
    disconnect?: recipeWhereUniqueInput | recipeWhereUniqueInput[]
    delete?: recipeWhereUniqueInput | recipeWhereUniqueInput[]
    connect?: recipeWhereUniqueInput | recipeWhereUniqueInput[]
    update?: recipeUpdateWithWhereUniqueWithoutAuthorInput | recipeUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: recipeUpdateManyWithWhereWithoutAuthorInput | recipeUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: recipeScalarWhereInput | recipeScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type recipeUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<recipeCreateWithoutAuthorInput, recipeUncheckedCreateWithoutAuthorInput> | recipeCreateWithoutAuthorInput[] | recipeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: recipeCreateOrConnectWithoutAuthorInput | recipeCreateOrConnectWithoutAuthorInput[]
    upsert?: recipeUpsertWithWhereUniqueWithoutAuthorInput | recipeUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: recipeCreateManyAuthorInputEnvelope
    set?: recipeWhereUniqueInput | recipeWhereUniqueInput[]
    disconnect?: recipeWhereUniqueInput | recipeWhereUniqueInput[]
    delete?: recipeWhereUniqueInput | recipeWhereUniqueInput[]
    connect?: recipeWhereUniqueInput | recipeWhereUniqueInput[]
    update?: recipeUpdateWithWhereUniqueWithoutAuthorInput | recipeUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: recipeUpdateManyWithWhereWithoutAuthorInput | recipeUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: recipeScalarWhereInput | recipeScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type recipeCreateNestedManyWithoutCategoryInput = {
    create?: XOR<recipeCreateWithoutCategoryInput, recipeUncheckedCreateWithoutCategoryInput> | recipeCreateWithoutCategoryInput[] | recipeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: recipeCreateOrConnectWithoutCategoryInput | recipeCreateOrConnectWithoutCategoryInput[]
    createMany?: recipeCreateManyCategoryInputEnvelope
    connect?: recipeWhereUniqueInput | recipeWhereUniqueInput[]
  }

  export type recipeUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<recipeCreateWithoutCategoryInput, recipeUncheckedCreateWithoutCategoryInput> | recipeCreateWithoutCategoryInput[] | recipeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: recipeCreateOrConnectWithoutCategoryInput | recipeCreateOrConnectWithoutCategoryInput[]
    createMany?: recipeCreateManyCategoryInputEnvelope
    connect?: recipeWhereUniqueInput | recipeWhereUniqueInput[]
  }

  export type recipeUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<recipeCreateWithoutCategoryInput, recipeUncheckedCreateWithoutCategoryInput> | recipeCreateWithoutCategoryInput[] | recipeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: recipeCreateOrConnectWithoutCategoryInput | recipeCreateOrConnectWithoutCategoryInput[]
    upsert?: recipeUpsertWithWhereUniqueWithoutCategoryInput | recipeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: recipeCreateManyCategoryInputEnvelope
    set?: recipeWhereUniqueInput | recipeWhereUniqueInput[]
    disconnect?: recipeWhereUniqueInput | recipeWhereUniqueInput[]
    delete?: recipeWhereUniqueInput | recipeWhereUniqueInput[]
    connect?: recipeWhereUniqueInput | recipeWhereUniqueInput[]
    update?: recipeUpdateWithWhereUniqueWithoutCategoryInput | recipeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: recipeUpdateManyWithWhereWithoutCategoryInput | recipeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: recipeScalarWhereInput | recipeScalarWhereInput[]
  }

  export type recipeUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<recipeCreateWithoutCategoryInput, recipeUncheckedCreateWithoutCategoryInput> | recipeCreateWithoutCategoryInput[] | recipeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: recipeCreateOrConnectWithoutCategoryInput | recipeCreateOrConnectWithoutCategoryInput[]
    upsert?: recipeUpsertWithWhereUniqueWithoutCategoryInput | recipeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: recipeCreateManyCategoryInputEnvelope
    set?: recipeWhereUniqueInput | recipeWhereUniqueInput[]
    disconnect?: recipeWhereUniqueInput | recipeWhereUniqueInput[]
    delete?: recipeWhereUniqueInput | recipeWhereUniqueInput[]
    connect?: recipeWhereUniqueInput | recipeWhereUniqueInput[]
    update?: recipeUpdateWithWhereUniqueWithoutCategoryInput | recipeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: recipeUpdateManyWithWhereWithoutCategoryInput | recipeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: recipeScalarWhereInput | recipeScalarWhereInput[]
  }

  export type ingredientCreateNestedManyWithoutRecipeInput = {
    create?: XOR<ingredientCreateWithoutRecipeInput, ingredientUncheckedCreateWithoutRecipeInput> | ingredientCreateWithoutRecipeInput[] | ingredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: ingredientCreateOrConnectWithoutRecipeInput | ingredientCreateOrConnectWithoutRecipeInput[]
    createMany?: ingredientCreateManyRecipeInputEnvelope
    connect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutRecipesInput = {
    create?: XOR<userCreateWithoutRecipesInput, userUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: userCreateOrConnectWithoutRecipesInput
    connect?: userWhereUniqueInput
  }

  export type categoryCreateNestedOneWithoutRecipesInput = {
    create?: XOR<categoryCreateWithoutRecipesInput, categoryUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: categoryCreateOrConnectWithoutRecipesInput
    connect?: categoryWhereUniqueInput
  }

  export type recipe_stepCreateNestedManyWithoutRecipeInput = {
    create?: XOR<recipe_stepCreateWithoutRecipeInput, recipe_stepUncheckedCreateWithoutRecipeInput> | recipe_stepCreateWithoutRecipeInput[] | recipe_stepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: recipe_stepCreateOrConnectWithoutRecipeInput | recipe_stepCreateOrConnectWithoutRecipeInput[]
    createMany?: recipe_stepCreateManyRecipeInputEnvelope
    connect?: recipe_stepWhereUniqueInput | recipe_stepWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutRecipeInput = {
    create?: XOR<reviewCreateWithoutRecipeInput, reviewUncheckedCreateWithoutRecipeInput> | reviewCreateWithoutRecipeInput[] | reviewUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutRecipeInput | reviewCreateOrConnectWithoutRecipeInput[]
    createMany?: reviewCreateManyRecipeInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type ingredientUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<ingredientCreateWithoutRecipeInput, ingredientUncheckedCreateWithoutRecipeInput> | ingredientCreateWithoutRecipeInput[] | ingredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: ingredientCreateOrConnectWithoutRecipeInput | ingredientCreateOrConnectWithoutRecipeInput[]
    createMany?: ingredientCreateManyRecipeInputEnvelope
    connect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
  }

  export type recipe_stepUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<recipe_stepCreateWithoutRecipeInput, recipe_stepUncheckedCreateWithoutRecipeInput> | recipe_stepCreateWithoutRecipeInput[] | recipe_stepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: recipe_stepCreateOrConnectWithoutRecipeInput | recipe_stepCreateOrConnectWithoutRecipeInput[]
    createMany?: recipe_stepCreateManyRecipeInputEnvelope
    connect?: recipe_stepWhereUniqueInput | recipe_stepWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<reviewCreateWithoutRecipeInput, reviewUncheckedCreateWithoutRecipeInput> | reviewCreateWithoutRecipeInput[] | reviewUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutRecipeInput | reviewCreateOrConnectWithoutRecipeInput[]
    createMany?: reviewCreateManyRecipeInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ingredientUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<ingredientCreateWithoutRecipeInput, ingredientUncheckedCreateWithoutRecipeInput> | ingredientCreateWithoutRecipeInput[] | ingredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: ingredientCreateOrConnectWithoutRecipeInput | ingredientCreateOrConnectWithoutRecipeInput[]
    upsert?: ingredientUpsertWithWhereUniqueWithoutRecipeInput | ingredientUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: ingredientCreateManyRecipeInputEnvelope
    set?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    disconnect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    delete?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    connect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    update?: ingredientUpdateWithWhereUniqueWithoutRecipeInput | ingredientUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: ingredientUpdateManyWithWhereWithoutRecipeInput | ingredientUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: ingredientScalarWhereInput | ingredientScalarWhereInput[]
  }

  export type userUpdateOneWithoutRecipesNestedInput = {
    create?: XOR<userCreateWithoutRecipesInput, userUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: userCreateOrConnectWithoutRecipesInput
    upsert?: userUpsertWithoutRecipesInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutRecipesInput, userUpdateWithoutRecipesInput>, userUncheckedUpdateWithoutRecipesInput>
  }

  export type categoryUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<categoryCreateWithoutRecipesInput, categoryUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: categoryCreateOrConnectWithoutRecipesInput
    upsert?: categoryUpsertWithoutRecipesInput
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutRecipesInput, categoryUpdateWithoutRecipesInput>, categoryUncheckedUpdateWithoutRecipesInput>
  }

  export type recipe_stepUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<recipe_stepCreateWithoutRecipeInput, recipe_stepUncheckedCreateWithoutRecipeInput> | recipe_stepCreateWithoutRecipeInput[] | recipe_stepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: recipe_stepCreateOrConnectWithoutRecipeInput | recipe_stepCreateOrConnectWithoutRecipeInput[]
    upsert?: recipe_stepUpsertWithWhereUniqueWithoutRecipeInput | recipe_stepUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: recipe_stepCreateManyRecipeInputEnvelope
    set?: recipe_stepWhereUniqueInput | recipe_stepWhereUniqueInput[]
    disconnect?: recipe_stepWhereUniqueInput | recipe_stepWhereUniqueInput[]
    delete?: recipe_stepWhereUniqueInput | recipe_stepWhereUniqueInput[]
    connect?: recipe_stepWhereUniqueInput | recipe_stepWhereUniqueInput[]
    update?: recipe_stepUpdateWithWhereUniqueWithoutRecipeInput | recipe_stepUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: recipe_stepUpdateManyWithWhereWithoutRecipeInput | recipe_stepUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: recipe_stepScalarWhereInput | recipe_stepScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<reviewCreateWithoutRecipeInput, reviewUncheckedCreateWithoutRecipeInput> | reviewCreateWithoutRecipeInput[] | reviewUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutRecipeInput | reviewCreateOrConnectWithoutRecipeInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutRecipeInput | reviewUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: reviewCreateManyRecipeInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutRecipeInput | reviewUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutRecipeInput | reviewUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type ingredientUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<ingredientCreateWithoutRecipeInput, ingredientUncheckedCreateWithoutRecipeInput> | ingredientCreateWithoutRecipeInput[] | ingredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: ingredientCreateOrConnectWithoutRecipeInput | ingredientCreateOrConnectWithoutRecipeInput[]
    upsert?: ingredientUpsertWithWhereUniqueWithoutRecipeInput | ingredientUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: ingredientCreateManyRecipeInputEnvelope
    set?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    disconnect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    delete?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    connect?: ingredientWhereUniqueInput | ingredientWhereUniqueInput[]
    update?: ingredientUpdateWithWhereUniqueWithoutRecipeInput | ingredientUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: ingredientUpdateManyWithWhereWithoutRecipeInput | ingredientUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: ingredientScalarWhereInput | ingredientScalarWhereInput[]
  }

  export type recipe_stepUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<recipe_stepCreateWithoutRecipeInput, recipe_stepUncheckedCreateWithoutRecipeInput> | recipe_stepCreateWithoutRecipeInput[] | recipe_stepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: recipe_stepCreateOrConnectWithoutRecipeInput | recipe_stepCreateOrConnectWithoutRecipeInput[]
    upsert?: recipe_stepUpsertWithWhereUniqueWithoutRecipeInput | recipe_stepUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: recipe_stepCreateManyRecipeInputEnvelope
    set?: recipe_stepWhereUniqueInput | recipe_stepWhereUniqueInput[]
    disconnect?: recipe_stepWhereUniqueInput | recipe_stepWhereUniqueInput[]
    delete?: recipe_stepWhereUniqueInput | recipe_stepWhereUniqueInput[]
    connect?: recipe_stepWhereUniqueInput | recipe_stepWhereUniqueInput[]
    update?: recipe_stepUpdateWithWhereUniqueWithoutRecipeInput | recipe_stepUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: recipe_stepUpdateManyWithWhereWithoutRecipeInput | recipe_stepUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: recipe_stepScalarWhereInput | recipe_stepScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<reviewCreateWithoutRecipeInput, reviewUncheckedCreateWithoutRecipeInput> | reviewCreateWithoutRecipeInput[] | reviewUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutRecipeInput | reviewCreateOrConnectWithoutRecipeInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutRecipeInput | reviewUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: reviewCreateManyRecipeInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutRecipeInput | reviewUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutRecipeInput | reviewUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type recipeCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<recipeCreateWithoutIngredientsInput, recipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: recipeCreateOrConnectWithoutIngredientsInput
    connect?: recipeWhereUniqueInput
  }

  export type recipeUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<recipeCreateWithoutIngredientsInput, recipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: recipeCreateOrConnectWithoutIngredientsInput
    upsert?: recipeUpsertWithoutIngredientsInput
    connect?: recipeWhereUniqueInput
    update?: XOR<XOR<recipeUpdateToOneWithWhereWithoutIngredientsInput, recipeUpdateWithoutIngredientsInput>, recipeUncheckedUpdateWithoutIngredientsInput>
  }

  export type recipeCreateNestedOneWithoutStepsInput = {
    create?: XOR<recipeCreateWithoutStepsInput, recipeUncheckedCreateWithoutStepsInput>
    connectOrCreate?: recipeCreateOrConnectWithoutStepsInput
    connect?: recipeWhereUniqueInput
  }

  export type recipeUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<recipeCreateWithoutStepsInput, recipeUncheckedCreateWithoutStepsInput>
    connectOrCreate?: recipeCreateOrConnectWithoutStepsInput
    upsert?: recipeUpsertWithoutStepsInput
    connect?: recipeWhereUniqueInput
    update?: XOR<XOR<recipeUpdateToOneWithWhereWithoutStepsInput, recipeUpdateWithoutStepsInput>, recipeUncheckedUpdateWithoutStepsInput>
  }

  export type recipeCreateNestedOneWithoutReviewsInput = {
    create?: XOR<recipeCreateWithoutReviewsInput, recipeUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: recipeCreateOrConnectWithoutReviewsInput
    connect?: recipeWhereUniqueInput
  }

  export type userCreateNestedOneWithoutReviewsInput = {
    create?: XOR<userCreateWithoutReviewsInput, userUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: userCreateOrConnectWithoutReviewsInput
    connect?: userWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type recipeUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<recipeCreateWithoutReviewsInput, recipeUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: recipeCreateOrConnectWithoutReviewsInput
    upsert?: recipeUpsertWithoutReviewsInput
    connect?: recipeWhereUniqueInput
    update?: XOR<XOR<recipeUpdateToOneWithWhereWithoutReviewsInput, recipeUpdateWithoutReviewsInput>, recipeUncheckedUpdateWithoutReviewsInput>
  }

  export type userUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<userCreateWithoutReviewsInput, userUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: userCreateOrConnectWithoutReviewsInput
    upsert?: userUpsertWithoutReviewsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutReviewsInput, userUpdateWithoutReviewsInput>, userUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type recipeCreateWithoutAuthorInput = {
    title: string
    image: string
    time: number
    difficulty: string
    calories: number
    servings?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: ingredientCreateNestedManyWithoutRecipeInput
    category: categoryCreateNestedOneWithoutRecipesInput
    steps?: recipe_stepCreateNestedManyWithoutRecipeInput
    reviews?: reviewCreateNestedManyWithoutRecipeInput
  }

  export type recipeUncheckedCreateWithoutAuthorInput = {
    title: string
    image: string
    time: number
    difficulty: string
    calories: number
    servings?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: number
    categoryId: number
    ingredients?: ingredientUncheckedCreateNestedManyWithoutRecipeInput
    steps?: recipe_stepUncheckedCreateNestedManyWithoutRecipeInput
    reviews?: reviewUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type recipeCreateOrConnectWithoutAuthorInput = {
    where: recipeWhereUniqueInput
    create: XOR<recipeCreateWithoutAuthorInput, recipeUncheckedCreateWithoutAuthorInput>
  }

  export type recipeCreateManyAuthorInputEnvelope = {
    data: recipeCreateManyAuthorInput | recipeCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutUserInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipe: recipeCreateNestedOneWithoutReviewsInput
  }

  export type reviewUncheckedCreateWithoutUserInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: number
    recipeId: number
  }

  export type reviewCreateOrConnectWithoutUserInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
  }

  export type reviewCreateManyUserInputEnvelope = {
    data: reviewCreateManyUserInput | reviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type recipeUpsertWithWhereUniqueWithoutAuthorInput = {
    where: recipeWhereUniqueInput
    update: XOR<recipeUpdateWithoutAuthorInput, recipeUncheckedUpdateWithoutAuthorInput>
    create: XOR<recipeCreateWithoutAuthorInput, recipeUncheckedCreateWithoutAuthorInput>
  }

  export type recipeUpdateWithWhereUniqueWithoutAuthorInput = {
    where: recipeWhereUniqueInput
    data: XOR<recipeUpdateWithoutAuthorInput, recipeUncheckedUpdateWithoutAuthorInput>
  }

  export type recipeUpdateManyWithWhereWithoutAuthorInput = {
    where: recipeScalarWhereInput
    data: XOR<recipeUpdateManyMutationInput, recipeUncheckedUpdateManyWithoutAuthorInput>
  }

  export type recipeScalarWhereInput = {
    AND?: recipeScalarWhereInput | recipeScalarWhereInput[]
    OR?: recipeScalarWhereInput[]
    NOT?: recipeScalarWhereInput | recipeScalarWhereInput[]
    title?: StringFilter<"recipe"> | string
    image?: StringFilter<"recipe"> | string
    time?: IntFilter<"recipe"> | number
    difficulty?: StringFilter<"recipe"> | string
    calories?: IntFilter<"recipe"> | number
    servings?: IntNullableFilter<"recipe"> | number | null
    description?: StringNullableFilter<"recipe"> | string | null
    createdAt?: DateTimeFilter<"recipe"> | Date | string
    updatedAt?: DateTimeFilter<"recipe"> | Date | string
    id?: IntFilter<"recipe"> | number
    categoryId?: IntFilter<"recipe"> | number
    authorId?: IntNullableFilter<"recipe"> | number | null
  }

  export type reviewUpsertWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>
  }

  export type reviewUpdateManyWithWhereWithoutUserInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutUserInput>
  }

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[]
    OR?: reviewScalarWhereInput[]
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[]
    rating?: FloatFilter<"review"> | number
    comment?: StringNullableFilter<"review"> | string | null
    createdAt?: DateTimeFilter<"review"> | Date | string
    updatedAt?: DateTimeFilter<"review"> | Date | string
    id?: IntFilter<"review"> | number
    userId?: IntFilter<"review"> | number
    recipeId?: IntFilter<"review"> | number
  }

  export type recipeCreateWithoutCategoryInput = {
    title: string
    image: string
    time: number
    difficulty: string
    calories: number
    servings?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: ingredientCreateNestedManyWithoutRecipeInput
    author?: userCreateNestedOneWithoutRecipesInput
    steps?: recipe_stepCreateNestedManyWithoutRecipeInput
    reviews?: reviewCreateNestedManyWithoutRecipeInput
  }

  export type recipeUncheckedCreateWithoutCategoryInput = {
    title: string
    image: string
    time: number
    difficulty: string
    calories: number
    servings?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: number
    authorId?: number | null
    ingredients?: ingredientUncheckedCreateNestedManyWithoutRecipeInput
    steps?: recipe_stepUncheckedCreateNestedManyWithoutRecipeInput
    reviews?: reviewUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type recipeCreateOrConnectWithoutCategoryInput = {
    where: recipeWhereUniqueInput
    create: XOR<recipeCreateWithoutCategoryInput, recipeUncheckedCreateWithoutCategoryInput>
  }

  export type recipeCreateManyCategoryInputEnvelope = {
    data: recipeCreateManyCategoryInput | recipeCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type recipeUpsertWithWhereUniqueWithoutCategoryInput = {
    where: recipeWhereUniqueInput
    update: XOR<recipeUpdateWithoutCategoryInput, recipeUncheckedUpdateWithoutCategoryInput>
    create: XOR<recipeCreateWithoutCategoryInput, recipeUncheckedCreateWithoutCategoryInput>
  }

  export type recipeUpdateWithWhereUniqueWithoutCategoryInput = {
    where: recipeWhereUniqueInput
    data: XOR<recipeUpdateWithoutCategoryInput, recipeUncheckedUpdateWithoutCategoryInput>
  }

  export type recipeUpdateManyWithWhereWithoutCategoryInput = {
    where: recipeScalarWhereInput
    data: XOR<recipeUpdateManyMutationInput, recipeUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ingredientCreateWithoutRecipeInput = {
    item: string
    amount: string
  }

  export type ingredientUncheckedCreateWithoutRecipeInput = {
    item: string
    amount: string
    id?: number
  }

  export type ingredientCreateOrConnectWithoutRecipeInput = {
    where: ingredientWhereUniqueInput
    create: XOR<ingredientCreateWithoutRecipeInput, ingredientUncheckedCreateWithoutRecipeInput>
  }

  export type ingredientCreateManyRecipeInputEnvelope = {
    data: ingredientCreateManyRecipeInput | ingredientCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutRecipesInput = {
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    reviews?: reviewCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutRecipesInput = {
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    id?: number
    reviews?: reviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutRecipesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRecipesInput, userUncheckedCreateWithoutRecipesInput>
  }

  export type categoryCreateWithoutRecipesInput = {
    name: string
  }

  export type categoryUncheckedCreateWithoutRecipesInput = {
    name: string
    id?: number
  }

  export type categoryCreateOrConnectWithoutRecipesInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutRecipesInput, categoryUncheckedCreateWithoutRecipesInput>
  }

  export type recipe_stepCreateWithoutRecipeInput = {
    number: number
    title: string
    description: string
  }

  export type recipe_stepUncheckedCreateWithoutRecipeInput = {
    number: number
    title: string
    description: string
    id?: number
  }

  export type recipe_stepCreateOrConnectWithoutRecipeInput = {
    where: recipe_stepWhereUniqueInput
    create: XOR<recipe_stepCreateWithoutRecipeInput, recipe_stepUncheckedCreateWithoutRecipeInput>
  }

  export type recipe_stepCreateManyRecipeInputEnvelope = {
    data: recipe_stepCreateManyRecipeInput | recipe_stepCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutRecipeInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutReviewsInput
  }

  export type reviewUncheckedCreateWithoutRecipeInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: number
    userId: number
  }

  export type reviewCreateOrConnectWithoutRecipeInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutRecipeInput, reviewUncheckedCreateWithoutRecipeInput>
  }

  export type reviewCreateManyRecipeInputEnvelope = {
    data: reviewCreateManyRecipeInput | reviewCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type ingredientUpsertWithWhereUniqueWithoutRecipeInput = {
    where: ingredientWhereUniqueInput
    update: XOR<ingredientUpdateWithoutRecipeInput, ingredientUncheckedUpdateWithoutRecipeInput>
    create: XOR<ingredientCreateWithoutRecipeInput, ingredientUncheckedCreateWithoutRecipeInput>
  }

  export type ingredientUpdateWithWhereUniqueWithoutRecipeInput = {
    where: ingredientWhereUniqueInput
    data: XOR<ingredientUpdateWithoutRecipeInput, ingredientUncheckedUpdateWithoutRecipeInput>
  }

  export type ingredientUpdateManyWithWhereWithoutRecipeInput = {
    where: ingredientScalarWhereInput
    data: XOR<ingredientUpdateManyMutationInput, ingredientUncheckedUpdateManyWithoutRecipeInput>
  }

  export type ingredientScalarWhereInput = {
    AND?: ingredientScalarWhereInput | ingredientScalarWhereInput[]
    OR?: ingredientScalarWhereInput[]
    NOT?: ingredientScalarWhereInput | ingredientScalarWhereInput[]
    item?: StringFilter<"ingredient"> | string
    amount?: StringFilter<"ingredient"> | string
    id?: IntFilter<"ingredient"> | number
    recipeId?: IntFilter<"ingredient"> | number
  }

  export type userUpsertWithoutRecipesInput = {
    update: XOR<userUpdateWithoutRecipesInput, userUncheckedUpdateWithoutRecipesInput>
    create: XOR<userCreateWithoutRecipesInput, userUncheckedCreateWithoutRecipesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutRecipesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutRecipesInput, userUncheckedUpdateWithoutRecipesInput>
  }

  export type userUpdateWithoutRecipesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    reviews?: reviewUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutRecipesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    reviews?: reviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type categoryUpsertWithoutRecipesInput = {
    update: XOR<categoryUpdateWithoutRecipesInput, categoryUncheckedUpdateWithoutRecipesInput>
    create: XOR<categoryCreateWithoutRecipesInput, categoryUncheckedCreateWithoutRecipesInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutRecipesInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutRecipesInput, categoryUncheckedUpdateWithoutRecipesInput>
  }

  export type categoryUpdateWithoutRecipesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateWithoutRecipesInput = {
    name?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type recipe_stepUpsertWithWhereUniqueWithoutRecipeInput = {
    where: recipe_stepWhereUniqueInput
    update: XOR<recipe_stepUpdateWithoutRecipeInput, recipe_stepUncheckedUpdateWithoutRecipeInput>
    create: XOR<recipe_stepCreateWithoutRecipeInput, recipe_stepUncheckedCreateWithoutRecipeInput>
  }

  export type recipe_stepUpdateWithWhereUniqueWithoutRecipeInput = {
    where: recipe_stepWhereUniqueInput
    data: XOR<recipe_stepUpdateWithoutRecipeInput, recipe_stepUncheckedUpdateWithoutRecipeInput>
  }

  export type recipe_stepUpdateManyWithWhereWithoutRecipeInput = {
    where: recipe_stepScalarWhereInput
    data: XOR<recipe_stepUpdateManyMutationInput, recipe_stepUncheckedUpdateManyWithoutRecipeInput>
  }

  export type recipe_stepScalarWhereInput = {
    AND?: recipe_stepScalarWhereInput | recipe_stepScalarWhereInput[]
    OR?: recipe_stepScalarWhereInput[]
    NOT?: recipe_stepScalarWhereInput | recipe_stepScalarWhereInput[]
    number?: IntFilter<"recipe_step"> | number
    title?: StringFilter<"recipe_step"> | string
    description?: StringFilter<"recipe_step"> | string
    id?: IntFilter<"recipe_step"> | number
    recipeId?: IntFilter<"recipe_step"> | number
  }

  export type reviewUpsertWithWhereUniqueWithoutRecipeInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutRecipeInput, reviewUncheckedUpdateWithoutRecipeInput>
    create: XOR<reviewCreateWithoutRecipeInput, reviewUncheckedCreateWithoutRecipeInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutRecipeInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutRecipeInput, reviewUncheckedUpdateWithoutRecipeInput>
  }

  export type reviewUpdateManyWithWhereWithoutRecipeInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutRecipeInput>
  }

  export type recipeCreateWithoutIngredientsInput = {
    title: string
    image: string
    time: number
    difficulty: string
    calories: number
    servings?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author?: userCreateNestedOneWithoutRecipesInput
    category: categoryCreateNestedOneWithoutRecipesInput
    steps?: recipe_stepCreateNestedManyWithoutRecipeInput
    reviews?: reviewCreateNestedManyWithoutRecipeInput
  }

  export type recipeUncheckedCreateWithoutIngredientsInput = {
    title: string
    image: string
    time: number
    difficulty: string
    calories: number
    servings?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: number
    categoryId: number
    authorId?: number | null
    steps?: recipe_stepUncheckedCreateNestedManyWithoutRecipeInput
    reviews?: reviewUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type recipeCreateOrConnectWithoutIngredientsInput = {
    where: recipeWhereUniqueInput
    create: XOR<recipeCreateWithoutIngredientsInput, recipeUncheckedCreateWithoutIngredientsInput>
  }

  export type recipeUpsertWithoutIngredientsInput = {
    update: XOR<recipeUpdateWithoutIngredientsInput, recipeUncheckedUpdateWithoutIngredientsInput>
    create: XOR<recipeCreateWithoutIngredientsInput, recipeUncheckedCreateWithoutIngredientsInput>
    where?: recipeWhereInput
  }

  export type recipeUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: recipeWhereInput
    data: XOR<recipeUpdateWithoutIngredientsInput, recipeUncheckedUpdateWithoutIngredientsInput>
  }

  export type recipeUpdateWithoutIngredientsInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: userUpdateOneWithoutRecipesNestedInput
    category?: categoryUpdateOneRequiredWithoutRecipesNestedInput
    steps?: recipe_stepUpdateManyWithoutRecipeNestedInput
    reviews?: reviewUpdateManyWithoutRecipeNestedInput
  }

  export type recipeUncheckedUpdateWithoutIngredientsInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    steps?: recipe_stepUncheckedUpdateManyWithoutRecipeNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type recipeCreateWithoutStepsInput = {
    title: string
    image: string
    time: number
    difficulty: string
    calories: number
    servings?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: ingredientCreateNestedManyWithoutRecipeInput
    author?: userCreateNestedOneWithoutRecipesInput
    category: categoryCreateNestedOneWithoutRecipesInput
    reviews?: reviewCreateNestedManyWithoutRecipeInput
  }

  export type recipeUncheckedCreateWithoutStepsInput = {
    title: string
    image: string
    time: number
    difficulty: string
    calories: number
    servings?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: number
    categoryId: number
    authorId?: number | null
    ingredients?: ingredientUncheckedCreateNestedManyWithoutRecipeInput
    reviews?: reviewUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type recipeCreateOrConnectWithoutStepsInput = {
    where: recipeWhereUniqueInput
    create: XOR<recipeCreateWithoutStepsInput, recipeUncheckedCreateWithoutStepsInput>
  }

  export type recipeUpsertWithoutStepsInput = {
    update: XOR<recipeUpdateWithoutStepsInput, recipeUncheckedUpdateWithoutStepsInput>
    create: XOR<recipeCreateWithoutStepsInput, recipeUncheckedCreateWithoutStepsInput>
    where?: recipeWhereInput
  }

  export type recipeUpdateToOneWithWhereWithoutStepsInput = {
    where?: recipeWhereInput
    data: XOR<recipeUpdateWithoutStepsInput, recipeUncheckedUpdateWithoutStepsInput>
  }

  export type recipeUpdateWithoutStepsInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: ingredientUpdateManyWithoutRecipeNestedInput
    author?: userUpdateOneWithoutRecipesNestedInput
    category?: categoryUpdateOneRequiredWithoutRecipesNestedInput
    reviews?: reviewUpdateManyWithoutRecipeNestedInput
  }

  export type recipeUncheckedUpdateWithoutStepsInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    ingredients?: ingredientUncheckedUpdateManyWithoutRecipeNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type recipeCreateWithoutReviewsInput = {
    title: string
    image: string
    time: number
    difficulty: string
    calories: number
    servings?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: ingredientCreateNestedManyWithoutRecipeInput
    author?: userCreateNestedOneWithoutRecipesInput
    category: categoryCreateNestedOneWithoutRecipesInput
    steps?: recipe_stepCreateNestedManyWithoutRecipeInput
  }

  export type recipeUncheckedCreateWithoutReviewsInput = {
    title: string
    image: string
    time: number
    difficulty: string
    calories: number
    servings?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: number
    categoryId: number
    authorId?: number | null
    ingredients?: ingredientUncheckedCreateNestedManyWithoutRecipeInput
    steps?: recipe_stepUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type recipeCreateOrConnectWithoutReviewsInput = {
    where: recipeWhereUniqueInput
    create: XOR<recipeCreateWithoutReviewsInput, recipeUncheckedCreateWithoutReviewsInput>
  }

  export type userCreateWithoutReviewsInput = {
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    recipes?: recipeCreateNestedManyWithoutAuthorInput
  }

  export type userUncheckedCreateWithoutReviewsInput = {
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    id?: number
    recipes?: recipeUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type userCreateOrConnectWithoutReviewsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutReviewsInput, userUncheckedCreateWithoutReviewsInput>
  }

  export type recipeUpsertWithoutReviewsInput = {
    update: XOR<recipeUpdateWithoutReviewsInput, recipeUncheckedUpdateWithoutReviewsInput>
    create: XOR<recipeCreateWithoutReviewsInput, recipeUncheckedCreateWithoutReviewsInput>
    where?: recipeWhereInput
  }

  export type recipeUpdateToOneWithWhereWithoutReviewsInput = {
    where?: recipeWhereInput
    data: XOR<recipeUpdateWithoutReviewsInput, recipeUncheckedUpdateWithoutReviewsInput>
  }

  export type recipeUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: ingredientUpdateManyWithoutRecipeNestedInput
    author?: userUpdateOneWithoutRecipesNestedInput
    category?: categoryUpdateOneRequiredWithoutRecipesNestedInput
    steps?: recipe_stepUpdateManyWithoutRecipeNestedInput
  }

  export type recipeUncheckedUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    ingredients?: ingredientUncheckedUpdateManyWithoutRecipeNestedInput
    steps?: recipe_stepUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type userUpsertWithoutReviewsInput = {
    update: XOR<userUpdateWithoutReviewsInput, userUncheckedUpdateWithoutReviewsInput>
    create: XOR<userCreateWithoutReviewsInput, userUncheckedCreateWithoutReviewsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutReviewsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutReviewsInput, userUncheckedUpdateWithoutReviewsInput>
  }

  export type userUpdateWithoutReviewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    recipes?: recipeUpdateManyWithoutAuthorNestedInput
  }

  export type userUncheckedUpdateWithoutReviewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    recipes?: recipeUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type recipeCreateManyAuthorInput = {
    title: string
    image: string
    time: number
    difficulty: string
    calories: number
    servings?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: number
    categoryId: number
  }

  export type reviewCreateManyUserInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: number
    recipeId: number
  }

  export type recipeUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: ingredientUpdateManyWithoutRecipeNestedInput
    category?: categoryUpdateOneRequiredWithoutRecipesNestedInput
    steps?: recipe_stepUpdateManyWithoutRecipeNestedInput
    reviews?: reviewUpdateManyWithoutRecipeNestedInput
  }

  export type recipeUncheckedUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    ingredients?: ingredientUncheckedUpdateManyWithoutRecipeNestedInput
    steps?: recipe_stepUncheckedUpdateManyWithoutRecipeNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type recipeUncheckedUpdateManyWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type reviewUpdateWithoutUserInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: recipeUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewUncheckedUpdateWithoutUserInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type reviewUncheckedUpdateManyWithoutUserInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type recipeCreateManyCategoryInput = {
    title: string
    image: string
    time: number
    difficulty: string
    calories: number
    servings?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: number
    authorId?: number | null
  }

  export type recipeUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: ingredientUpdateManyWithoutRecipeNestedInput
    author?: userUpdateOneWithoutRecipesNestedInput
    steps?: recipe_stepUpdateManyWithoutRecipeNestedInput
    reviews?: reviewUpdateManyWithoutRecipeNestedInput
  }

  export type recipeUncheckedUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    ingredients?: ingredientUncheckedUpdateManyWithoutRecipeNestedInput
    steps?: recipe_stepUncheckedUpdateManyWithoutRecipeNestedInput
    reviews?: reviewUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type recipeUncheckedUpdateManyWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    servings?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ingredientCreateManyRecipeInput = {
    item: string
    amount: string
    id?: number
  }

  export type recipe_stepCreateManyRecipeInput = {
    number: number
    title: string
    description: string
    id?: number
  }

  export type reviewCreateManyRecipeInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    id?: number
    userId: number
  }

  export type ingredientUpdateWithoutRecipeInput = {
    item?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
  }

  export type ingredientUncheckedUpdateWithoutRecipeInput = {
    item?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type ingredientUncheckedUpdateManyWithoutRecipeInput = {
    item?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type recipe_stepUpdateWithoutRecipeInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type recipe_stepUncheckedUpdateWithoutRecipeInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type recipe_stepUncheckedUpdateManyWithoutRecipeInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type reviewUpdateWithoutRecipeInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type reviewUncheckedUpdateWithoutRecipeInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type reviewUncheckedUpdateManyWithoutRecipeInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}