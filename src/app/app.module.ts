import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// router
import { RouterModule } from '@angular/router';

// GoogleChart
import { Ng2GoogleChartsModule } from 'ng2-google-charts';


// Material
import {
	MdToolbarModule,
	MdSidenavModule,
	MdTabsModule,
	MdCardModule,
	MdListModule,
	MdGridListModule,
	MdInputModule,
	MdIconModule,
	MdProgressSpinnerModule,
	MdDialogModule,
	MdButtonModule
} from '@angular/material';

// アニメーション
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// ジェスチャー
import 'hammerjs';

// サービス
import { ApiAccessorService } from './service/api/api-accessor.service';

// ページ & コンポーネント
import { HomeComponent } from './page/home/home.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';
import { BrandComponent } from './page/brand/brand.component';
import { ProfitComponent } from './page/profit/profit/profit.component';
import { LodingDialogComponent } from './component/loding-dialog/loding-dialog.component';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		PortfolioComponent,
		BrandComponent,
		ProfitComponent,
		LodingDialogComponent
	],
	imports: [
		// ルータ
		RouterModule.forRoot([
			{
				'path': 'portfolio',
				'component': PortfolioComponent
			},
			{
				'path': 'brand',
				'component': BrandComponent
			},
			{
				'path' : 'profit',
				'component' : ProfitComponent
			}
		]),
		BrowserModule,
		BrowserAnimationsModule,
		Ng2GoogleChartsModule,
		MdCardModule,
		MdListModule,
		MdGridListModule,
		MdToolbarModule,
		MdTabsModule,
		MdInputModule,
		MdIconModule,
		MdButtonModule,
		MdSidenavModule,
		MdProgressSpinnerModule,
		MdDialogModule,
		FormsModule,
		ReactiveFormsModule
	],
	entryComponents : [LodingDialogComponent],
	providers: [ApiAccessorService],
	bootstrap: [AppComponent]
})
export class AppModule { }
