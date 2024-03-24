import productsGet from '@/actions/products-get';
import React from 'react';
import Image from 'next/image';
import Banner from "../../../public/produtos/4head.webp";
import Container from '@/components/ui/Container';
import ProductList from '@/components/product/Product-List';
import { Billboard as BillboardType } from '@/types';
import Billboard from '@/components/ui/Billboard';

const HomePage = async () => {
    const { data } = await productsGet();
    const billboard: BillboardType = {
        id: "3",
        label: "Billboard 3",
        imageUrl: "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    return (
        <Container >
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items={data} />
            </div>
        </Container>
    );
};

export default HomePage;