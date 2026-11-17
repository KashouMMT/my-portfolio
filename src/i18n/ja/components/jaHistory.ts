export default {
	work_history: "職務経歴",
	history_description: `これまでの職務経歴と、実際にリリースしたシステムをご紹介します。<br />
また、こちらから`,
	download_my_resume_here: "履歴書をダウンロードできます",
	for_japanese_resume: "日本語版の履歴書はこちら",
	view_project: "プロジェクトを見る →",

	projects: "開発実績",
	projects_description: "個人開発およびチーム開発のプロジェクトです。",

	entries: {
		ai_platform: {
			title: "AIチャットプラットフォーム — LangGraph + FastAPI + React",
			sub_title: "フリーランス · Python、LangGraph、PostgreSQL、React、AWS",
			date: "2026年2月 – 現在",
			summary:
				"個人プロジェクトとして始まり、現在は1つのコードベースで日本向けの2つのサービスを本番稼働させています。",
			bullets: [
				"career-lamp.com — 求職者との会話から、履歴書（.xlsx）と職務経歴書（.docx）を作成するAI面談サービス。",
				"ai-katazuke.jp — 部屋の写真や動画から品目を読み取り、品目カタログと照合してトラックの積載量を算出し、見積書と業務委託契約書を作成するサービス。",
				"プラグインアーキテクチャ：製品に依存しないコアの上に、ツール・プロンプト・DBマイグレーションを持つプラグインとして各サービスを実装し、個別にデプロイ。",
				"PostgreSQLによる永続化と、長い会話のためのローリング要約を備えたLangGraphエージェント。応答はServer-Sent EventsでReact UIへストリーミング。",
				"ロールベースの権限管理、S3によるファイル保存、GitHub ActionsによるAWS（EC2、RDS）へのCI/CD、640件以上の自動テスト。",
				"Claude Codeを活用し、文書化した開発ルールのもとで開発。すべての変更にテストとドキュメントの更新を伴わせています。",
			],
		},
		freelance_web: {
			title: "フリーランス フルスタック開発者",
			sub_title: "タイの日系企業向け多言語Webプラットフォーム",
			date: "2025年8月 – 現在",
			summary:
				"再利用可能なSpring Bootプラットフォームを一人で設計・開発し、5つのWebサイトとして運用しています。",
			bullets: [
				"Spring BootとThymeleafによるサーバーサイドレンダリング。1サイトあたり最大5言語（日本語・英語・タイ語・韓国語・中国語）に対応。",
				"Spring Securityによる管理画面、スタッフのスケジュール管理、ブログ・ニュースCMS、WebSocket/SockJSによるリアルタイムチャット。",
				"MySQLとMongoDB、セッションとキャッシュにRedisを使用。",
				"Debian VPS上にDocker、Nginx、Cloudflareで構築し、TLSに対応。",
			],
		},
		dirace: {
			title: "フルスタックソフトウェア開発者",
			sub_title: "DIR-ACE Technology",
			date: "2024 – 2025（1年間）",
			bullets: [
				"Spring Bootとモダンなフロントエンドフレームワークを使用したWebアプリケーションの開発・保守。",
				"API設計、データベースの最適化、パフォーマンス改善など、開発工程全般を担当。",
				"チームと密に連携し、信頼性と拡張性のあるシステムを開発。",
			],
		},
		go_pattaya: {
			title: "Go Pattaya",
			sub_title: "旅行プラットフォーム（React + Spring Boot）",
			date: "2025年11月",
			bullets: [
				"タイ・パタヤの観光スポット検索や旅行計画をサポートするフルスタックWebアプリケーション。",
				"ReactでインタラクティブなUIを、Spring BootでREST APIを実装。",
				"位置情報を活用した機能を実装し、アクセシビリティとパフォーマンスにも配慮。",
			],
		},
		dat_growth_hub: {
			title: "DAT Growth Hub",
			sub_title: "DIR-ACE TechnologyでのOJT中のチーム開発（Spring Boot）",
			date: "2024年7月",
			bullets: [
				"チームの一員としてSpring BootでWebプラットフォームを開発。",
				"RESTful APIを設計し、フロントエンドと連携。",
				"機能の企画、デバッグ、デプロイに参加。",
			],
		},
		tetris: {
			title: "C/C++版テトリス",
			sub_title: "ターミナルで動作するゲーム",
			date: "2024年4月",
			bullets: [
				"C/C++で開発した、ターミナル上で遊べるテトリス。",
				"ブロックの回転、衝突判定、ライン消去、スコア管理を実装。",
				"低レベルなメモリ管理と、コンソール上での効率的な描画を重視。",
			],
		},
		portfolio: {
			title: "ポートフォリオサイト",
			sub_title: "このサイト — React & TypeScript",
			date: "継続中",
			bullets: [
				"React 19とTypeScriptで開発し、i18nextで英語・日本語に対応。",
				"EmailJSによるお問い合わせフォーム。GitHub Pagesにデプロイ。",
			],
		},
	},
};
