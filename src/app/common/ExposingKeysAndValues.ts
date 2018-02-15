import {getKeysExceptId, getValuesExceptId} from "../../utils";

export class ExposingKeys {
  getObject : () => {};

  getKeys() {
    return getKeysExceptId(this.getObject());
  }

}

export class ExposingValues {
  getObject : () => {};

  getValues() {
    return getValuesExceptId(this.getObject());
  }
}
