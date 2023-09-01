import { Model } from 'mongoose';
import { Mandate } from './interfaces/mandate.interface';
import { CreateMandateDTO } from './dto/create-mandate.dto';
export declare class MandateService {
    private readonly mandateModel;
    constructor(mandateModel: Model<Mandate>);
    getMandate(): Promise<Mandate[]>;
    addMandate(createMandateDTO: CreateMandateDTO): Promise<Mandate>;
    findById(mandateID: any): Promise<Mandate>;
    updateMandateById(mandateData: any): Promise<Mandate>;
}
