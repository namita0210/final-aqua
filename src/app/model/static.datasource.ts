import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";
import { Order } from "./order.model";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Australian grayling", "Queenfish", " (Queenfish)", 100
        ),
        new Product(2, "Bighead carp", "Queenfish", "(Queenfish)", 100),
        new Product(3, "Cherry salmon", "Queenfish", " (Queenfish)", 100),
        new Product(4, "PDemoisell", "Queenfish", " (Queenfish)", 100),
        new Product(5, "Escolar", "Queenfish", " (Queenfish)", 100),
        new Product(6, "Firefish", "Littleone", " (Littleone)", 100),
        new Product(7, "Glass knifefish", "Littleone", " (Littleone)", 100),
        new Product(8, "Herring", "Littleone", " (Littleone)", 100),
        new Product(9, "Ilisha", "Littleone", " (Littleone)", 100),
        new Product(10, "King-of-the-salmon", "Littleone", "(Littleone)", 100),
        new Product(11, "Menhaden", "Jellyfish", " (Jellyfish)", 100),
        new Product(12, "New Zealand smelt", "Jellyfish", " (Jellyfish)", 100),
        new Product(13, "Opaleye", "Jellyfish", "(Jellyfish)", 100),
        new Product(14, "Pearl danio", "Jellyfish", " (Jellyfish)", 100),
        new Product(15, "Queen triggerfish", "Jellyfish", " (Jellyfish)", 100),
    ];

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);
    }
}