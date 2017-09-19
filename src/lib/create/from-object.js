import { normalizeObjectUnits } from '../units/aliases';
import { configFromArray } from './from-array';
import map from '../utils/map';
import getParsingFlags from './parsing-flags';

export function configFromObject(config) {
    if (config._d) {
        return;
    }

    // Empty object, same behaviour as empty string
    if (!config._i) {
        getParsingFlags(config).empty = true;
    }
    
    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}
