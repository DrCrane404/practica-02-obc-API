import { Injectable } from '@nestjs/common';
import{ Cliente } from './models/cliente';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Injectable()
export class ClientesService {
    private clientes: Cliente[] =[];
    private idContador: number=1;

    createCliente(nuevoCliente: CreateClienteDto):Cliente{
        const cliente: Cliente={
            id:this.idContador,
            nombre:nuevoCliente.nombre,
            correo:nuevoCliente.correo,
            telefono:nuevoCliente.telefono,
            fecha:nuevoCliente.fecha
        }
        this.clientes.push(cliente);
        this.idContador +=1;
        return cliente;
    }

    getAllClientes():Cliente[]{
        return this.clientes;
    }

    getClienteById(id:number):Cliente{
        return this.clientes.find((cliente)=>cliente.id==id)!;
    }

    updateCliente(id:number,cliente:CreateClienteDto):Cliente{
        const clienteUpdate = this.getClienteById(id);
        if(clienteUpdate){
            clienteUpdate.nombre = cliente.nombre;
            clienteUpdate.correo = cliente.correo;
            clienteUpdate.telefono = cliente.telefono;
        }
        return clienteUpdate;
    }

    deleteCliente(id:number):void{
        this.clientes= this.clientes.filter((cliente)=> cliente.id!=id);
    }

}
