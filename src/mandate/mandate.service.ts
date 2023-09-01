import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Mandate } from './interfaces/mandate.interface';
import { CreateMandateDTO } from './dto/create-mandate.dto';

@Injectable()
export class MandateService {
  constructor(
    @InjectModel('Mandate') private readonly mandateModel: Model<Mandate>,
  ) {}

  async getMandate(): Promise<Mandate[]> {
    const mandate = await this.mandateModel.find().exec();
    return mandate;
  }

  async addMandate(createMandateDTO: CreateMandateDTO): Promise<Mandate> {
    const newMandate = new this.mandateModel(createMandateDTO);
    return newMandate.save();
  }

  async findById(mandateID): Promise<Mandate> {
    const mandate = await this.mandateModel.findById(mandateID).exec();
    return mandate;
  }

  async updateMandateById(mandateData): Promise<Mandate> {
    const updatedMandate = await this.mandateModel
      .findByIdAndUpdate({ _id: mandateData._id }, mandateData)
      .exec();
    return updatedMandate;
  }
}
