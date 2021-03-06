
import React from 'react';
import PropTypes from 'prop-types';

import './Product.css'

class ProductItem extends React.Component {


    static propTypes = {
        code:PropTypes.number.isRequired,
        number:PropTypes.number.isRequired,
        price:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired,
        imageURL:PropTypes.string.isRequired,
        cdchangeActiveProduct:PropTypes.func,
        cddeleteProduct:PropTypes.func,
        activeProducts:PropTypes.number,
        clickedButton:PropTypes.number,
        changeClassProduct:PropTypes.func
    }


    changeActiveProduct = (e) => {
        this.props.cdchangeActiveProduct(this.props.code);
    }

    deleteProduct = (e) => {
        this.props.cddeleteProduct(this.props.code);
    }

    render() {

        return (
            <div key={this.props.code} className='wrapper-products'>
                <div className={(this.props.activeProducts==this.props.code)?'product-table__table-product_active' : 'product-table__table-product'} onClick={this.changeActiveProduct}>
                    <img className='product-attribute product-table__table-product--image' src={this.props.imageURL} alt='picture in card'/>
                    <div className='product-attribute product-table__table-product--name'>
                        <p className='column-name'>Name Product</p>
                        <p className='text'>{this.props.name}</p>
                    </div>
                    <div className='product-attribute product-table__table-product--price'>
                        <p className='column-name'>Price Product</p>
                        <p className='text'>{this.props.price}</p>
                    </div>
                    <div className='product-attribute product-table__table-product--number'>
                        <p className='column-name'>Number Product</p>
                        <p className='text'>{this.props.number}</p>
                    </div>
                </div>,
                <button key={this.props.code} className='button-delete' onClick={this.deleteProduct}>
                    Delete
                </button>
            </div>
        )


        // return  React.DOM.div({key:this.props.code, className:'wrapper-products'},
        //             React.DOM.div({className:(this.props.activeProducts==this.props.code)?'product-table__table-product_active' : 'product-table__table-product', onClick:this.changeActiveProduct},
        //                 React.DOM.img({className:'product-attribute product-table__table-product--image', src:this.props.imageURL, alt:'picture in card'}),
        //                 React.DOM.div({className:'product-attribute product-table__table-product--name'}, 
        //                     React.DOM.p({className:'column-name'}, 'Name Product'),
        //                     React.DOM.p({className:'text'}, this.props.name),
        //                 ),
        //                 React.DOM.div({className:'product-attribute product-table__table-product--price'}, 
        //                     React.DOM.p({className:'column-name'}, 'Price Product'),
        //                     React.DOM.p({className:'text'}, this.props.price)
        //                 ),
        //                 React.DOM.div({className:'product-attribute product-table__table-product--number'},
        //                     React.DOM.p({className:'column-name'}, 'Number Product'),
        //                     React.DOM.p({className:'text'}, this.props.number)
        //                 ),
        //             ),
        //         React.DOM.button({key:this.props.code, className:'button-delete', onClick:this.deleteProduct},'Delete')
        // )
    }
};

export default ProductItem;
