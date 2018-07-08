USE [TMS_DB]
GO
/****** Object:  Table [dbo].[CustomerTypeMaster]    Script Date: 7/8/2018 6:57:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomerTypeMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Description] [varchar](500) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_CustomerTypeMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SupplierTypeMaster]    Script Date: 7/8/2018 6:57:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SupplierTypeMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Description] [varchar](500) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_SupplierTypeMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[CustomerTypeMaster] ON 

INSERT [dbo].[CustomerTypeMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (1, N'yoratech', N'WebApiandAngular', 1, 1, CAST(N'2018-07-08T12:13:40.487' AS DateTime), 1, CAST(N'2018-07-08T12:31:23.597' AS DateTime))
INSERT [dbo].[CustomerTypeMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (2, N'Lenovo', N'Lenovo is good product', 1, 1, CAST(N'2018-07-08T12:14:33.740' AS DateTime), 1, CAST(N'2018-07-08T13:49:20.703' AS DateTime))
INSERT [dbo].[CustomerTypeMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (3, N'RGgroups', N'Product', 0, 1, CAST(N'2018-07-08T12:15:16.283' AS DateTime), 1, CAST(N'2018-07-08T12:15:16.283' AS DateTime))
INSERT [dbo].[CustomerTypeMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (4, N'Dell', N'Dell Product', 0, 1, CAST(N'2018-07-08T13:53:05.837' AS DateTime), 1, CAST(N'2018-07-08T13:53:05.837' AS DateTime))
SET IDENTITY_INSERT [dbo].[CustomerTypeMaster] OFF
SET IDENTITY_INSERT [dbo].[SupplierTypeMaster] ON 

INSERT [dbo].[SupplierTypeMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (1, N'mani', N'database', 0, 1, CAST(N'2018-07-08T16:17:06.507' AS DateTime), 1, CAST(N'2018-07-08T16:19:21.103' AS DateTime))
INSERT [dbo].[SupplierTypeMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (2, N'nani', N'testing', 1, 1, CAST(N'2018-07-08T16:17:33.853' AS DateTime), 1, CAST(N'2018-07-08T17:05:49.617' AS DateTime))
INSERT [dbo].[SupplierTypeMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (3, N'Katraj', N'developer', 1, 1, CAST(N'2018-07-08T16:17:50.740' AS DateTime), 1, CAST(N'2018-07-08T16:17:50.740' AS DateTime))
INSERT [dbo].[SupplierTypeMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (4, N'sai', N'database', 1, 1, CAST(N'2018-07-08T16:18:04.863' AS DateTime), 1, CAST(N'2018-07-08T16:18:04.863' AS DateTime))
INSERT [dbo].[SupplierTypeMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (5, N'sasehu', N'developer', 0, 1, CAST(N'2018-07-08T17:06:22.893' AS DateTime), 1, CAST(N'2018-07-08T17:06:22.893' AS DateTime))
SET IDENTITY_INSERT [dbo].[SupplierTypeMaster] OFF
