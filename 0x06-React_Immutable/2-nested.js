import { fromJS } from "immutable";

export default function accessImmutableObject(object, array) {
    const mapped_obj = fromJS(object);

    return mapped_obj.getIn(array, undefined);
}
