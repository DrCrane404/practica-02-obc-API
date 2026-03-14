import { Controller, Get,Post,Put,Delete,Body,Param } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { Cliente } from './models/cliente'
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
    constructor(private clientesService: ClientesService){
    }

    @Get()
    getAll():Cliente[]{
        return this.clientesService.getAllClientes();
    }

    @Get(':id')
    getOne(@Param('id') id:number):Cliente{
        return this.clientesService.getClienteById(id);
    }

    @Post()
    create(@Body() nuevoCliente:CreateClienteDto):Cliente{
        return this.clientesService.createCliente(nuevoCliente);
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() clienteActualizado:CreateClienteDto):Cliente{
        return this.clientesService.updateCliente(id,clienteActualizado)
    }

    @Delete(':id')
    delete(@Param('id') id:number):void{
        this.clientesService.deleteCliente(id);
    }
}
