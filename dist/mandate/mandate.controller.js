"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MandateController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const mandate_service_1 = require("./mandate.service");
const create_mandate_dto_1 = require("./dto/create-mandate.dto");
const passport_1 = require("@nestjs/passport");
let MandateController = class MandateController {
    constructor(mandateService) {
        this.mandateService = mandateService;
    }
    async getMandate(res) {
        const mandates = await this.mandateService.getMandate();
        return res.status(common_1.HttpStatus.OK).json(mandates);
    }
    async addMandate(res, createmandaterDTO) {
        const newMandate = await this.mandateService.addMandate(createmandaterDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Mandate has been submitted successfully!',
            User: newMandate,
        });
    }
    async updateMandateById(res, createmandaterDTO) {
        const updatedMandate = await this.mandateService.updateMandateById(createmandaterDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Mandate has been updated successfully!',
            User: updatedMandate,
        });
    }
};
exports.MandateController = MandateController;
__decorate([
    (0, common_1.Get)('getMandate'),
    (0, common_2.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MandateController.prototype, "getMandate", null);
__decorate([
    (0, common_1.Post)('addMandate'),
    (0, common_2.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_mandate_dto_1.CreateMandateDTO]),
    __metadata("design:returntype", Promise)
], MandateController.prototype, "addMandate", null);
__decorate([
    (0, common_1.Patch)('updateMandateById'),
    (0, common_2.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_mandate_dto_1.CreateMandateDTO]),
    __metadata("design:returntype", Promise)
], MandateController.prototype, "updateMandateById", null);
exports.MandateController = MandateController = __decorate([
    (0, common_1.Controller)('mandate'),
    __metadata("design:paramtypes", [mandate_service_1.MandateService])
], MandateController);
//# sourceMappingURL=mandate.controller.js.map