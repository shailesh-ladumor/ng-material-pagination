/**
 * Author Shailesh M Ladumor
 * Email: shaileshmladumor@gmail.com
 */
import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Pagination} from './pagination.model';

@Component({
	selector: 'shail-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class PaginationComponent implements OnInit {
	@Input() pagination: Pagination;
	@Output() onPaginationChange: EventEmitter<Pagination> = new EventEmitter();
	@Input() perPageCounts = [10, 25, 50, 100];
	@Input() defaultPerPage = 10;
	pages: number[] = [];

	ngOnInit(): void {
		this.pagination.pageSize = this.defaultPerPage;
	}

	nextPage(): void {
		this.pagination.currentPage++;
		this.emitPaginationChange();
	}

	prevPage(): void {
		this.pagination.currentPage--;
		this.emitPaginationChange();
	}

	onPerPageChange(): void {
		this.pagination.setLastPage();
		if (this.pagination.currentPage >= this.pages.length) {
			this.pagination.currentPage = this.pagination.lastPage;
		}
		this.emitPaginationChange();
	}

	emitPaginationChange(): void {
		this.onPaginationChange.emit(this.pagination);
	}

	range = () => {
		this.pages = [];
		for (let i = 0; i < this.pagination.lastPage; ++i) {
			this.pages.push(i + 1);
		}
		return this.pages;
	};

	jumpTo(pageNo: number): void {
		this.pagination.currentPage = pageNo;
		this.emitPaginationChange();
	}
}
