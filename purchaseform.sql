USE [TMS_DB]
GO
/****** Object:  Table [dbo].[LocationMaster]    Script Date: 14-07-2018 21:26:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LocationMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NULL,
	[Description] [varchar](200) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_LocationMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PurchaseDetailMaster]    Script Date: 14-07-2018 21:26:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PurchaseDetailMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PurchaseId] [int] NULL,
	[ProductId] [int] NULL,
	[UomId] [int] NULL,
	[Quantity] [nvarchar](200) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_PurchaseDetail] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PurchaseMaster]    Script Date: 14-07-2018 21:26:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PurchaseMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PurchaseDate] [datetime] NULL,
	[Status] [int] NULL,
	[IsActive] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
	[Supplier_Id] [int] NULL,
 CONSTRAINT [PK_PurchaseMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StoreMaster]    Script Date: 14-07-2018 21:26:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StoreMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PurchaseDetailId] [int] NULL,
	[LocationId] [int] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_StoreMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[LocationMaster] ON 

INSERT [dbo].[LocationMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (1, N'w', N'w', 1, 1, CAST(N'2018-02-01T00:00:00.000' AS DateTime), 1, CAST(N'2018-02-01T00:00:00.000' AS DateTime))
INSERT [dbo].[LocationMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (2, N'e', N'e', 1, 1, CAST(N'2018-02-01T00:00:00.000' AS DateTime), 1, CAST(N'2018-02-01T00:00:00.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[LocationMaster] OFF
SET IDENTITY_INSERT [dbo].[PurchaseDetailMaster] ON 

INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (1, 1, 1, 1, N'1', 1, 1, CAST(N'2018-12-12T00:00:00.000' AS DateTime), 1, CAST(N'2018-12-12T00:00:00.000' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (2, 2, 1, 1, NULL, 1, NULL, CAST(N'2018-07-14T16:06:26.350' AS DateTime), NULL, CAST(N'2018-07-14T16:06:26.350' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (3, 3, 1, 1, NULL, 1, NULL, CAST(N'2018-07-14T16:08:52.690' AS DateTime), NULL, CAST(N'2018-07-14T16:08:52.690' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (4, 4, 1, 1, NULL, 1, NULL, CAST(N'2018-07-14T16:10:10.417' AS DateTime), NULL, CAST(N'2018-07-14T16:10:10.417' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (5, 5, NULL, NULL, NULL, 1, NULL, CAST(N'2018-07-14T16:19:09.023' AS DateTime), NULL, CAST(N'2018-07-14T16:19:09.023' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (6, 6, NULL, NULL, NULL, 1, NULL, CAST(N'2018-07-14T16:21:41.003' AS DateTime), NULL, CAST(N'2018-07-14T16:21:41.003' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (7, 7, NULL, 1, NULL, 1, NULL, CAST(N'2018-07-14T16:28:40.747' AS DateTime), NULL, CAST(N'2018-07-14T16:28:40.747' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (8, 8, NULL, 1, NULL, 1, NULL, CAST(N'2018-07-14T16:30:04.347' AS DateTime), NULL, CAST(N'2018-07-14T16:30:04.347' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (9, 9, NULL, NULL, NULL, 1, NULL, CAST(N'2018-07-14T16:30:50.627' AS DateTime), NULL, CAST(N'2018-07-14T16:30:50.627' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (10, 10, NULL, 1, NULL, 1, NULL, CAST(N'2018-07-14T16:33:23.657' AS DateTime), NULL, CAST(N'2018-07-14T16:33:23.657' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (11, 11, NULL, 1, NULL, 1, NULL, CAST(N'2018-07-14T16:34:22.747' AS DateTime), NULL, CAST(N'2018-07-14T16:34:22.747' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (12, 12, NULL, 1, NULL, 1, NULL, CAST(N'2018-07-14T16:37:57.023' AS DateTime), NULL, CAST(N'2018-07-14T16:37:57.023' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (13, 13, NULL, 1, NULL, 1, NULL, CAST(N'2018-07-14T16:38:05.857' AS DateTime), NULL, CAST(N'2018-07-14T16:38:05.857' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (14, 14, NULL, 1, NULL, 1, NULL, CAST(N'2018-07-14T16:39:55.990' AS DateTime), NULL, CAST(N'2018-07-14T16:39:55.990' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (15, 15, NULL, 1, NULL, 1, NULL, CAST(N'2018-07-14T16:41:29.747' AS DateTime), NULL, CAST(N'2018-07-14T16:41:29.747' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (16, 16, 1, 1, N'11', 1, NULL, CAST(N'2018-07-14T16:50:22.070' AS DateTime), NULL, CAST(N'2018-07-14T16:50:22.070' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (17, 17, NULL, NULL, N'34567', 1, NULL, CAST(N'2018-07-14T16:51:10.420' AS DateTime), NULL, CAST(N'2018-07-14T16:51:10.420' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (18, 18, 1, 1, N'12435', 1, NULL, CAST(N'2018-07-14T16:52:20.363' AS DateTime), NULL, CAST(N'2018-07-14T16:52:20.363' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (19, 19, 1, 1, NULL, 1, NULL, CAST(N'2018-07-14T17:25:36.620' AS DateTime), NULL, CAST(N'2018-07-14T17:25:36.620' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (20, 20, 1, 1, N'45', 1, NULL, CAST(N'2018-07-14T17:27:37.510' AS DateTime), NULL, CAST(N'2018-07-14T17:27:37.510' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (21, 21, 1, 1, N'9', 1, NULL, CAST(N'2018-07-14T17:31:56.063' AS DateTime), NULL, CAST(N'2018-07-14T17:31:56.063' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (22, 34, 1, 1, N'435', 1, NULL, CAST(N'2018-07-14T20:12:40.197' AS DateTime), NULL, CAST(N'2018-07-14T20:12:40.197' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (23, 35, 1, 1, N'555', 1, NULL, CAST(N'2018-07-14T20:57:32.300' AS DateTime), NULL, CAST(N'2018-07-14T20:57:32.300' AS DateTime))
INSERT [dbo].[PurchaseDetailMaster] ([Id], [PurchaseId], [ProductId], [UomId], [Quantity], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (24, 36, 1, 1, N'77', 1, NULL, CAST(N'2018-07-14T21:00:09.770' AS DateTime), NULL, CAST(N'2018-07-14T21:00:09.770' AS DateTime))
SET IDENTITY_INSERT [dbo].[PurchaseDetailMaster] OFF
SET IDENTITY_INSERT [dbo].[PurchaseMaster] ON 

INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (1, CAST(N'2018-12-12T00:00:00.000' AS DateTime), 1, 1, 1, CAST(N'2018-12-12T00:00:00.000' AS DateTime), 1, CAST(N'2018-12-12T00:00:00.000' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (2, CAST(N'2018-07-19T18:30:00.000' AS DateTime), NULL, NULL, NULL, CAST(N'2018-07-14T16:06:26.350' AS DateTime), NULL, CAST(N'2018-07-14T16:06:26.350' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (3, CAST(N'2018-06-24T18:30:00.000' AS DateTime), NULL, NULL, NULL, CAST(N'2018-07-14T16:08:52.690' AS DateTime), NULL, CAST(N'2018-07-14T16:08:52.690' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (4, CAST(N'2018-06-25T18:30:00.000' AS DateTime), NULL, NULL, NULL, CAST(N'2018-07-14T16:10:10.417' AS DateTime), NULL, CAST(N'2018-07-14T16:10:10.417' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (5, NULL, NULL, NULL, NULL, CAST(N'2018-07-14T16:19:09.023' AS DateTime), NULL, CAST(N'2018-07-14T16:19:09.023' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (6, NULL, NULL, NULL, NULL, CAST(N'2018-07-14T16:21:41.003' AS DateTime), NULL, CAST(N'2018-07-14T16:21:41.003' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (7, CAST(N'2018-06-24T18:30:00.000' AS DateTime), NULL, NULL, NULL, CAST(N'2018-07-14T16:28:40.747' AS DateTime), NULL, CAST(N'2018-07-14T16:28:40.747' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (8, CAST(N'2018-08-01T18:30:00.000' AS DateTime), NULL, NULL, NULL, CAST(N'2018-07-14T16:30:04.347' AS DateTime), NULL, CAST(N'2018-07-14T16:30:04.347' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (9, NULL, NULL, NULL, NULL, CAST(N'2018-07-14T16:30:50.627' AS DateTime), NULL, CAST(N'2018-07-14T16:30:50.627' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (10, CAST(N'2018-04-30T18:30:00.000' AS DateTime), NULL, NULL, NULL, CAST(N'2018-07-14T16:33:23.657' AS DateTime), NULL, CAST(N'2018-07-14T16:33:23.657' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (11, CAST(N'2018-06-24T18:30:00.000' AS DateTime), NULL, NULL, NULL, CAST(N'2018-07-14T16:34:22.747' AS DateTime), NULL, CAST(N'2018-07-14T16:34:22.747' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (12, CAST(N'2018-06-24T18:30:00.000' AS DateTime), NULL, NULL, NULL, CAST(N'2018-07-14T16:37:57.023' AS DateTime), NULL, CAST(N'2018-07-14T16:37:57.023' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (13, CAST(N'2018-06-24T18:30:00.000' AS DateTime), NULL, NULL, NULL, CAST(N'2018-07-14T16:38:05.857' AS DateTime), NULL, CAST(N'2018-07-14T16:38:05.857' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (14, CAST(N'2018-07-24T18:30:00.000' AS DateTime), NULL, NULL, NULL, CAST(N'2018-07-14T16:39:55.990' AS DateTime), NULL, CAST(N'2018-07-14T16:39:55.990' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (15, CAST(N'2018-07-25T18:30:00.000' AS DateTime), NULL, NULL, NULL, CAST(N'2018-07-14T16:41:29.747' AS DateTime), NULL, CAST(N'2018-07-14T16:41:29.747' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (16, CAST(N'2018-06-24T18:30:00.000' AS DateTime), NULL, NULL, NULL, CAST(N'2018-07-14T16:50:22.070' AS DateTime), NULL, CAST(N'2018-07-14T16:50:22.070' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (17, NULL, NULL, NULL, NULL, CAST(N'2018-07-14T16:51:10.420' AS DateTime), NULL, CAST(N'2018-07-14T16:51:10.420' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (18, CAST(N'2018-07-26T18:30:00.000' AS DateTime), NULL, NULL, NULL, CAST(N'2018-07-14T16:52:20.363' AS DateTime), NULL, CAST(N'2018-07-14T16:52:20.363' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (19, NULL, NULL, NULL, NULL, CAST(N'2018-07-14T17:25:36.620' AS DateTime), NULL, CAST(N'2018-07-14T17:25:36.620' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (20, CAST(N'2018-06-24T18:30:00.000' AS DateTime), NULL, NULL, NULL, CAST(N'2018-07-14T17:27:37.510' AS DateTime), NULL, CAST(N'2018-07-14T17:27:37.510' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (21, CAST(N'2018-06-24T18:30:00.000' AS DateTime), NULL, NULL, NULL, CAST(N'2018-07-14T17:31:56.063' AS DateTime), NULL, CAST(N'2018-07-14T17:31:56.063' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (22, CAST(N'2018-07-14T17:50:24.273' AS DateTime), 112, 0, 1, CAST(N'2018-07-14T17:50:24.273' AS DateTime), 1, CAST(N'2018-07-14T17:50:24.273' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (23, CAST(N'2018-07-14T17:51:22.347' AS DateTime), NULL, 1, 1, CAST(N'2018-07-14T17:51:22.347' AS DateTime), 1, CAST(N'2018-07-14T17:51:22.347' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (24, CAST(N'2018-07-14T17:53:16.333' AS DateTime), NULL, 1, 1, CAST(N'2018-07-14T17:53:16.333' AS DateTime), 1, CAST(N'2018-07-14T17:53:16.333' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (25, CAST(N'2018-07-14T17:59:21.980' AS DateTime), 123456, 1, 1, CAST(N'2018-07-14T17:59:21.980' AS DateTime), 1, CAST(N'2018-07-14T17:59:21.980' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (26, CAST(N'2018-07-14T18:00:46.333' AS DateTime), 123456, 1, 1, CAST(N'2018-07-14T18:00:46.333' AS DateTime), 1, CAST(N'2018-07-14T18:00:46.333' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (27, CAST(N'2018-07-14T18:01:50.803' AS DateTime), 1234567, 1, 1, CAST(N'2018-07-14T18:01:50.803' AS DateTime), 1, CAST(N'2018-07-14T18:01:50.803' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (28, CAST(N'2018-07-14T18:03:12.080' AS DateTime), 12345, 1, 1, CAST(N'2018-07-14T18:03:12.080' AS DateTime), 1, CAST(N'2018-07-14T18:03:12.080' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (29, CAST(N'2018-07-14T18:05:15.230' AS DateTime), 123456, 1, 1, CAST(N'2018-07-14T18:05:15.230' AS DateTime), 1, CAST(N'2018-07-14T18:05:15.230' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (30, CAST(N'2018-07-14T18:06:28.583' AS DateTime), 456789, 1, 1, CAST(N'2018-07-14T18:06:28.583' AS DateTime), 1, CAST(N'2018-07-14T18:06:28.583' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (31, CAST(N'2018-07-14T18:08:05.260' AS DateTime), 23456789, 1, 1, CAST(N'2018-07-14T18:08:05.260' AS DateTime), 1, CAST(N'2018-07-14T18:08:05.260' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (32, CAST(N'2018-07-14T18:17:38.350' AS DateTime), 123, 1, 1, CAST(N'2018-07-14T18:17:38.350' AS DateTime), 1, CAST(N'2018-07-14T18:17:38.350' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (33, CAST(N'2018-07-14T18:19:28.507' AS DateTime), 1, 1, 1, CAST(N'2018-07-14T18:19:28.507' AS DateTime), 1, CAST(N'2018-07-14T18:19:28.507' AS DateTime), 2)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (34, CAST(N'2018-07-16T18:30:00.000' AS DateTime), NULL, NULL, NULL, CAST(N'2018-07-14T20:12:40.197' AS DateTime), NULL, CAST(N'2018-07-14T20:12:40.197' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (35, CAST(N'2018-06-25T18:30:00.000' AS DateTime), NULL, NULL, NULL, CAST(N'2018-07-14T20:57:32.300' AS DateTime), NULL, CAST(N'2018-07-14T20:57:32.300' AS DateTime), NULL)
INSERT [dbo].[PurchaseMaster] ([Id], [PurchaseDate], [Status], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Supplier_Id]) VALUES (36, CAST(N'2018-06-25T18:30:00.000' AS DateTime), NULL, NULL, NULL, CAST(N'2018-07-14T21:00:09.770' AS DateTime), NULL, CAST(N'2018-07-14T21:00:09.770' AS DateTime), NULL)
SET IDENTITY_INSERT [dbo].[PurchaseMaster] OFF
SET IDENTITY_INSERT [dbo].[StoreMaster] ON 

INSERT [dbo].[StoreMaster] ([Id], [PurchaseDetailId], [LocationId], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (1, 1, 1, 1, 1, CAST(N'2018-02-01T00:00:00.000' AS DateTime), 1, CAST(N'2018-02-01T00:00:00.000' AS DateTime))
INSERT [dbo].[StoreMaster] ([Id], [PurchaseDetailId], [LocationId], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (2, 2, 2, 1, 1, CAST(N'2018-02-01T00:00:00.000' AS DateTime), 1, CAST(N'2018-02-01T00:00:00.000' AS DateTime))
INSERT [dbo].[StoreMaster] ([Id], [PurchaseDetailId], [LocationId], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (3, 19, 2, NULL, NULL, CAST(N'2018-07-14T17:25:36.620' AS DateTime), NULL, CAST(N'2018-07-14T17:25:36.620' AS DateTime))
INSERT [dbo].[StoreMaster] ([Id], [PurchaseDetailId], [LocationId], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (4, 20, 1, NULL, NULL, CAST(N'2018-07-14T17:27:37.510' AS DateTime), NULL, CAST(N'2018-07-14T17:27:37.510' AS DateTime))
INSERT [dbo].[StoreMaster] ([Id], [PurchaseDetailId], [LocationId], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (5, 1, 4, 1, 1, CAST(N'2018-03-03T00:00:00.000' AS DateTime), 1, CAST(N'2018-03-22T00:00:00.000' AS DateTime))
INSERT [dbo].[StoreMaster] ([Id], [PurchaseDetailId], [LocationId], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (6, 21, 4, NULL, NULL, CAST(N'2018-07-14T17:31:56.063' AS DateTime), NULL, CAST(N'2018-07-14T17:31:56.063' AS DateTime))
INSERT [dbo].[StoreMaster] ([Id], [PurchaseDetailId], [LocationId], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (7, 22, 1, NULL, NULL, CAST(N'2018-07-14T20:12:40.197' AS DateTime), NULL, CAST(N'2018-07-14T20:12:40.197' AS DateTime))
INSERT [dbo].[StoreMaster] ([Id], [PurchaseDetailId], [LocationId], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (8, 23, 1, NULL, NULL, CAST(N'2018-07-14T20:57:32.300' AS DateTime), NULL, CAST(N'2018-07-14T20:57:32.300' AS DateTime))
INSERT [dbo].[StoreMaster] ([Id], [PurchaseDetailId], [LocationId], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (9, 24, 1, NULL, NULL, CAST(N'2018-07-14T21:00:09.770' AS DateTime), NULL, CAST(N'2018-07-14T21:00:09.770' AS DateTime))
SET IDENTITY_INSERT [dbo].[StoreMaster] OFF
/****** Object:  StoredProcedure [dbo].[USP_PurchaseFormPopulate]    Script Date: 14-07-2018 21:26:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[USP_PurchaseFormPopulate]
as 
begin
select loc.Name as LocationName,loc.Id as LocationId

from StoreMaster sm

inner join LocationMaster loc on loc.Id = sm.LocationId

where sm.IsActive = 1 and loc.IsActive=1


select distinct  sup.Id as SupplierId,sup.Name as SupplierName from PurchaseMaster pm

inner join SupplierMaster sup on sup.Id = pm.Supplier_Id

where sup.IsActive = 1 and pm.IsActive=1


select uom.Name as UOMName,uom.Id as UOMId from PurchaseMaster pur

inner join PurchaseDetailMaster pdm  on pdm.PurchaseId = pur.Id

inner join UnitOfMeasurementMaster uom on uom.Id = pdm.UomId

where pdm.IsActive = 1 and uom.IsActive=1 and pur.IsActive = 1



select pm.Name as ProductName, pm.Id as ProductId from PurchaseMaster pur 

inner join PurchaseDetailMaster pdm  on pdm.PurchaseId = pur.Id

inner join ProductMaster pm on pm.Id = pdm.ProductId

where pdm.IsActive = 1 and pm.IsActive=1 and pur.IsActive = 1
 

end 
GO
/****** Object:  StoredProcedure [dbo].[USP_PurchaseFormSave]    Script Date: 14-07-2018 21:26:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[USP_PurchaseFormSave]
(
@PurchaseDate dateTime,
@Status int,
@IsActive int,
@CreatedBy int,
@CreatedDate dateTime,
@ModifiedBy int,
@ModifiedDate dateTime,
@Supplier_Id int,
@ProductId int ,
@UomId int,
@Quantity nvarchar(200),
@LocationId int
)
as
begin
 insert into PurchaseMaster(PurchaseDate,Status,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate,Supplier_Id)
 values(@PurchaseDate,@Status,@IsActive,@CreatedBy,@CreatedDate,@ModifiedBy,@ModifiedDate,@Supplier_Id)


 declare @purchaseId int;
 SELECT @purchaseId = SCOPE_IDENTITY();

 INSERT INTO  PurchaseDetailMaster(purchaseId, ProductId,UomId,Quantity,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate)
 VALUES (@purchaseId, @ProductId,@UomId,@Quantity,1,@CreatedBy,@CreatedDate,@ModifiedBy,@ModifiedDate);



 declare @PurchaseDetailId int;
 SELECT @PurchaseDetailId= SCOPE_IDENTITY();

 insert into StoreMaster(PurchaseDetailId,LocationId,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate)
 values (@PurchaseDetailId,@LocationId,@IsActive,@CreatedBy,@CreatedDate,@ModifiedBy,@ModifiedDate)

end









GO
