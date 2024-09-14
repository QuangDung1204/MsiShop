import { memo } from 'react';
import { Container } from 'react-bootstrap';

const ShoppingCart = ({ cartItems }) => {
    const items = cartItems || [];

    return (
        <Container>
            {items.length === 0 ? (
                <p>Giỏ hàng của bạn đang trống</p>
            ) : (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.name} - Số lượng: {item.quantity} - Giá: {item.price}
                        </li>
                    ))}
                </ul>
            )}
        </Container>
    );
};

export default memo(ShoppingCart);
