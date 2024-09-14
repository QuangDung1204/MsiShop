import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
import "./style.scss";
import featProducts from 'pages/user/homePage/productsData';

const ProductDetailPage = () => {
    const { id } = useParams();
    const product = featProducts.all.products.find(p => p.id === parseInt(id));

    // if (!product) {
    //     return <div>Product not found</div>;
    // }

    const imgs = [product.img];

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
                <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
            </Breadcrumb>

            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <img src={product.img} alt={product.name} />
                        <div>
                            {imgs.map((item, key) => (
                                <img src={item} alt='productPic' key={key} />
                            ))}
                        </div>
                    </div>
                    <div className='col-6'>
                        <h1>{product.name}</h1>
                        <p>Price: {product.price}</p>
                        <p>Chi Tiết</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(ProductDetailPage);
