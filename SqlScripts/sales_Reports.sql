USE [TMS_DB]
GO
/****** Object:  Table [dbo].[SalesDetail]    Script Date: 7/14/2018 11:50:37 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SalesDetail](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[SalesId] [int] NULL,
	[Quantity] [nvarchar](200) NULL,
	[ProductId] [int] NULL,
	[UOMId] [int] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
 CONSTRAINT [PK_SalesDetail] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SalesMaster]    Script Date: 7/14/2018 11:50:37 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SalesMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PosId] [int] NULL,
	[UserId] [int] NULL,
	[CustomerId] [int] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
	[SalesDate] [datetime] NULL,
 CONSTRAINT [PK_SalesMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[SalesDetail] ON 

INSERT [dbo].[SalesDetail] ([Id], [SalesId], [Quantity], [ProductId], [UOMId], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (1, 2, N'kilo', 2, 2, 1, 1, CAST(N'2018-07-01T00:00:00.000' AS DateTime), 1, CAST(N'2018-07-08T00:00:00.000' AS DateTime))
INSERT [dbo].[SalesDetail] ([Id], [SalesId], [Quantity], [ProductId], [UOMId], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (2, 3, N'Liters', 3, 3, 1, 1, CAST(N'2018-07-12T00:00:00.000' AS DateTime), 1, CAST(N'2018-07-12T00:00:00.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[SalesDetail] OFF
SET IDENTITY_INSERT [dbo].[SalesMaster] ON 

INSERT [dbo].[SalesMaster] ([Id], [PosId], [UserId], [CustomerId], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [SalesDate]) VALUES (1, 1, 1, 1, 1, 1, CAST(N'2018-07-10T00:00:00.000' AS DateTime), 1, CAST(N'2018-07-10T12:39:00.643' AS DateTime), CAST(N'2018-07-14T00:00:00.000' AS DateTime))
INSERT [dbo].[SalesMaster] ([Id], [PosId], [UserId], [CustomerId], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [SalesDate]) VALUES (2, 1, 1, 1, 1, 1, CAST(N'2018-07-10T00:00:00.000' AS DateTime), 1, CAST(N'2018-07-11T09:01:45.110' AS DateTime), CAST(N'2018-07-13T00:00:00.000' AS DateTime))
INSERT [dbo].[SalesMaster] ([Id], [PosId], [UserId], [CustomerId], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [SalesDate]) VALUES (3, 1, 1, 1, 1, 1, CAST(N'2018-07-10T00:00:00.000' AS DateTime), 1, CAST(N'2018-07-10T00:00:00.000' AS DateTime), CAST(N'2018-07-12T00:00:00.000' AS DateTime))
INSERT [dbo].[SalesMaster] ([Id], [PosId], [UserId], [CustomerId], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [SalesDate]) VALUES (4, 1, 1, 1, 1, 1, CAST(N'2018-07-10T00:00:00.000' AS DateTime), 1, CAST(N'2018-07-10T00:00:00.000' AS DateTime), CAST(N'2018-01-05T00:00:00.000' AS DateTime))
INSERT [dbo].[SalesMaster] ([Id], [PosId], [UserId], [CustomerId], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [SalesDate]) VALUES (5, 3, NULL, NULL, 1, 1, CAST(N'2018-07-10T22:59:15.380' AS DateTime), 1, CAST(N'2018-07-10T22:59:15.380' AS DateTime), NULL)
INSERT [dbo].[SalesMaster] ([Id], [PosId], [UserId], [CustomerId], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [SalesDate]) VALUES (6, 2, NULL, NULL, 1, 1, CAST(N'2018-07-11T08:54:34.217' AS DateTime), 1, CAST(N'2018-07-11T08:54:34.217' AS DateTime), NULL)
INSERT [dbo].[SalesMaster] ([Id], [PosId], [UserId], [CustomerId], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [SalesDate]) VALUES (7, 4, NULL, NULL, 1, 1, CAST(N'2018-07-12T09:33:56.887' AS DateTime), 1, CAST(N'2018-07-12T09:33:56.887' AS DateTime), NULL)
SET IDENTITY_INSERT [dbo].[SalesMaster] OFF
/****** Object:  StoredProcedure [dbo].[USP_SalesMaster]    Script Date: 7/14/2018 11:50:38 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create proc [dbo].[USP_SalesMaster]
As
Begin

select pm.Name as ProductName, pm.Id as ProductId from SalesMaster sm 

inner join SalesDetail sd  on sd.SalesId = sm.Id

inner join ProductMaster pm on pm.Id = sd.ProductId

where sd.IsActive = 1 and pm.IsActive=1 and sm.IsActive = 1

 

End
GO
/****** Object:  StoredProcedure [dbo].[USP_SalesReports]    Script Date: 7/14/2018 11:50:38 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[USP_SalesReports]

As
Begin
Select pm.Name ProductName,cm.Name CustomerName,uom.Name UOMName,p.Name POSName,sd.Quantity,sm.SalesDate from SalesMaster sm

inner join SalesDetail sd on sd.SalesId = sm.Id

inner join CustomerMaster cm on cm.Id = sm.CustomerId

inner join ProductMaster pm on pm.Id = sm.PosId

inner join UnitOfMeasurementMaster uom on uom.Id = sd.UOMId

inner join PosMaster p on p.Id = sm.PosId


End
GO
