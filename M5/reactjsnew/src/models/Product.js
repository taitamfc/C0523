import axios from "axios";

class Product {
	constructor() {
		// Khai báo thuộc tính
		this.api_url = 'https://6083df209b2bed00170404a0.mockapi.io/angular/products';
	}

	// Lấy tất cả    
	all() {
		// Promise
		return new Promise( (reslove, reject) => {
			axios.get( this.api_url ).then( (res) => {
				reslove(res)
			}).catch( (res) => {
				reject(res);
			});
		})
	}

	// Lấy tất cả 
	async getAll(){
		return await axios.get( this.api_url );
	}

	// Lấy chi tiết
	find( id ){
		return new Promise( (reslove, reject) => {
			axios.get( this.api_url + '/' + id ).then( (res) => {
				reslove(res)
			}).catch( (res) => {
				reject(res);
			});
		})
	}

	// Xử lý cập nhật
	update( id, data ){
		return new Promise( (reslove, reject) => {
			axios.put( this.api_url + '/' + id , data ).then( (res) => {
				reslove(res)
			}).catch( (res) => {
				reject(res);
			});
		})
	}
	// Xử lý xóa
	destroy( id ){
		return new Promise( (reslove, reject) => {
			axios.delete( this.api_url + '/' + id ).then( (res) => {
				reslove(res)
			}).catch( (res) => {
				reject(res);
			});
		})
	}

	// Xử lý
	store( data ){
		return new Promise( (reslove, reject) => {
			axios.post( this.api_url , data ).then( (res) => {
				reslove(res)
			}).catch( (res) => {
				reject(res);
			});
		})
	}
}

export default new Product;