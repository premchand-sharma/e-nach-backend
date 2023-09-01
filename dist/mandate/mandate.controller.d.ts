import { MandateService } from './mandate.service';
import { CreateMandateDTO } from './dto/create-mandate.dto';
export declare class MandateController {
    private mandateService;
    constructor(mandateService: MandateService);
    getMandate(res: any): Promise<any>;
    addMandate(res: any, createmandaterDTO: CreateMandateDTO): Promise<any>;
    updateMandateById(res: any, createmandaterDTO: CreateMandateDTO): Promise<any>;
}
