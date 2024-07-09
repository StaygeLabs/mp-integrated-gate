type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

type Either = {
  isLeft?: boolean;
  isRight?: boolean;
};

type Parameter<T> = Parameters<T>[0];

type JSONValue = string | number | boolean | JSONObject | JSONArray;

interface JSONObject {
  [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> {}

type Json = JSONObject | JSONArray;

type ValueOf<T> = T[keyof T];

type AddMissingProps<T, K extends PropertyKey = AllKeys<T>> = T extends unknown
  ? T & Record<Exclude<K, keyof T>, never>
  : never;

type MergedObject<T> = {
  [K in keyof AddMissingProps<T>]: AddMissingProps<T>[K];
};
