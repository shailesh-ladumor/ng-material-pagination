export class Pagination {
	currentPage: number;
	pageSize: number;
	lastPage: number;
	private _totalCount: number;

	get totalCount(): number {
		return this._totalCount;
	}

	set totalCount(value: number) {
		this._totalCount = value;
		this.setLastPage();
	}

	constructor() {
		this.reset();
	}

	public reset(): void {
		this.currentPage = 1;
		this.pageSize = 10;
		this.totalCount = 0;
	}

	public setLastPage(): void {
		this.lastPage = Math.ceil(this.totalCount / this.pageSize);
		if (this.lastPage === 0) {
			this.lastPage = 1;
		}
	}
}
