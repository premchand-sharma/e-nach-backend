"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MandateSchema = void 0;
const mongoose = require("mongoose");
exports.MandateSchema = new mongoose.Schema({
    created_date: {
        type: Date,
        default: Date.now,
    },
    customer_identifier: String,
    auth_mode: String,
    mandate_type: String,
    corporate_config_id: String,
    mandate_data: {},
});
//# sourceMappingURL=mandate.schema.js.map