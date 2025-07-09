"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    return res.status(http_status_codes_1.StatusCodes.CONFLICT).send("Ola mundo");
});
exports.default = router;
