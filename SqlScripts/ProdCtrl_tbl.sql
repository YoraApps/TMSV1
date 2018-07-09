USE [TMS_DB]
GO
/****** Object:  Table [dbo].[ProductCategoryMaster]    Script Date: 7/8/2018 7:28:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductCategoryMaster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](200) NULL,
	[Description] [varchar](500) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedDate] [datetime] NULL,
	[Prod_Grp_Id] [int] NULL,
 CONSTRAINT [PK_ProductCategoryMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[ProductCategoryMaster] ON 

INSERT [dbo].[ProductCategoryMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Prod_Grp_Id]) VALUES (1, N'TV', N'HP LED Display 4 GB Ram 2TB Hard Disk i5 Processor ', 0, 1, CAST(N'2018-07-07T11:43:35.837' AS DateTime), 1, CAST(N'2018-07-07T11:43:35.837' AS DateTime), 1)
INSERT [dbo].[ProductCategoryMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Prod_Grp_Id]) VALUES (2, N'Laptop', N'Lenovo LED Display 5 GB Ram 512GB Hard Disk i5 Processor ', 0, 1, CAST(N'2018-07-07T12:37:44.317' AS DateTime), 1, CAST(N'2018-07-07T12:37:44.317' AS DateTime), 1)
INSERT [dbo].[ProductCategoryMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Prod_Grp_Id]) VALUES (3, N'Cot', N'Bed', 1, 1, CAST(N'2018-07-07T17:20:33.077' AS DateTime), 1, CAST(N'2018-07-07T17:20:33.077' AS DateTime), NULL)
INSERT [dbo].[ProductCategoryMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Prod_Grp_Id]) VALUES (4, N'Samsung', N'Samsung Ideapad 320 Core i5 5th Gen - (6 GB/1 TB HDD/Windows 10 Home/1 GB Graphics) IP 320-15IKB Laptop  ', 1, 1, CAST(N'2018-07-07T17:22:00.683' AS DateTime), 1, CAST(N'2018-07-07T17:22:00.683' AS DateTime), 1)
INSERT [dbo].[ProductCategoryMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Prod_Grp_Id]) VALUES (5, NULL, NULL, 0, 1, CAST(N'2018-07-07T21:32:10.247' AS DateTime), 1, CAST(N'2018-07-07T21:32:10.247' AS DateTime), 1)
INSERT [dbo].[ProductCategoryMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Prod_Grp_Id]) VALUES (6, NULL, NULL, 0, 1, CAST(N'2018-07-07T21:52:36.340' AS DateTime), 1, CAST(N'2018-07-07T21:52:36.340' AS DateTime), NULL)
INSERT [dbo].[ProductCategoryMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Prod_Grp_Id]) VALUES (7, N'Watches', N'qwerty', 0, 1, CAST(N'2018-07-07T21:53:43.157' AS DateTime), 1, CAST(N'2018-07-07T21:53:43.157' AS DateTime), 1)
INSERT [dbo].[ProductCategoryMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Prod_Grp_Id]) VALUES (8, N'Chair', N'Wooden', 1, 1, CAST(N'2018-07-08T15:18:10.323' AS DateTime), 1, CAST(N'2018-07-08T15:18:10.323' AS DateTime), NULL)
INSERT [dbo].[ProductCategoryMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Prod_Grp_Id]) VALUES (9, N'Table', N'Wood', 1, 1, CAST(N'2018-07-08T15:25:37.460' AS DateTime), 1, CAST(N'2018-07-08T15:25:37.460' AS DateTime), NULL)
INSERT [dbo].[ProductCategoryMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Prod_Grp_Id]) VALUES (10, N'FootBall', N'fifa worldcup', 1, 1, CAST(N'2018-07-08T15:42:54.290' AS DateTime), 1, CAST(N'2018-07-08T15:42:54.290' AS DateTime), 2)
INSERT [dbo].[ProductCategoryMaster] ([Id], [Name], [Description], [IsActive], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate], [Prod_Grp_Id]) VALUES (11, N'Apple', N'IPhone,IPads', 1, 1, CAST(N'2018-07-08T16:31:31.720' AS DateTime), 1, CAST(N'2018-07-08T16:31:31.720' AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[ProductCategoryMaster] OFF
/****** Object:  StoredProcedure [dbo].[Usp_GetAllProductCategory]    Script Date: 7/8/2018 7:28:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Usp_GetAllProductCategory]
As
Begin

select pcm.Id,pcm.Name,pcm.Description,pcm.IsActive,pcm.CreatedBy,pcm.CreatedDate,
pcm.ModifiedBy,pcm.ModifiedDate,pgm.Name as ProductGroupName,pgm.Id as GroupId from ProductCategoryMaster pcm 
inner join ProductGroupMaster pgm 
on pgm.Id = pcm.Prod_Grp_Id
where pcm.IsActive = 1

End

select * from [dbo].[ProductGroupMaster]

select * from ProductCategoryMaster

GO
/****** Object:  StoredProcedure [dbo].[Usp_GetAllProducts]    Script Date: 7/8/2018 7:28:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE  proc [dbo].[Usp_GetAllProducts]
As
Begin
	select p.Id,p.Name,p.Description,p.ImageURI,p.GRNCode,p.IsActive,p.CreatedBy,p.CreatedDate,p.ModifiedBy,p.ModifiedDate,
	pc.Name as ProductCategoryName from ProductMaster p 
	inner join ProductCategoryMaster pc on p.Prod_Cat_Id = pc.Id
	where p.IsActive=1
End
GO
