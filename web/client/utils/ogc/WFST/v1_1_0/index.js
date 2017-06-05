/*
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const {transaction} = require('./transaction');
const {insert} = require('./insert');
const {update, property} = require('./update');
const {deleteFeature, deleteFeatures, deleteById} = require('./delete');
module.exports = {
    insert,
    update,
    property,
    deleteFeature,
    deleteFeatures,
    deleteById,
    transaction
};
