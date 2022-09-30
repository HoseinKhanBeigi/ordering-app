import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.request';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepo: OrdersRepository) {}
  async createOrder(req: CreateOrderRequest) {
    return this.orderRepo.create(req);
  }
}
