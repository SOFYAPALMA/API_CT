USE [TalentosDev]
GO
/****** Object:  Table [dbo].[Categorias]    Script Date: 7/03/2025 11:53:35 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categorias](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [nvarchar](50) NULL,
 CONSTRAINT [PK_Categorias] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Productos]    Script Date: 7/03/2025 11:53:35 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Productos](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [nvarchar](50) NULL,
	[precio] [float] NULL,
	[fecha_creacion] [datetime2](7) NULL,
	[id_categoria] [int] NULL,
 CONSTRAINT [PK_Productos] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Categorias] ON 

INSERT [dbo].[Categorias] ([id], [nombre]) VALUES (1, N'Sacos')
INSERT [dbo].[Categorias] ([id], [nombre]) VALUES (2, N'Zapatos')
INSERT [dbo].[Categorias] ([id], [nombre]) VALUES (3, N'pry')
INSERT [dbo].[Categorias] ([id], [nombre]) VALUES (4, N'blusas')
SET IDENTITY_INSERT [dbo].[Categorias] OFF
GO
SET IDENTITY_INSERT [dbo].[Productos] ON 

INSERT [dbo].[Productos] ([id], [nombre], [precio], [fecha_creacion], [id_categoria]) VALUES (1, N'mmmm', 456, CAST(N'2025-03-07T18:14:21.2860000' AS DateTime2), 2)
INSERT [dbo].[Productos] ([id], [nombre], [precio], [fecha_creacion], [id_categoria]) VALUES (2, N'Azael', 4056, CAST(N'2025-03-07T18:14:21.2860000' AS DateTime2), 2)
INSERT [dbo].[Productos] ([id], [nombre], [precio], [fecha_creacion], [id_categoria]) VALUES (3, N'Azael2', 0, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 0)
INSERT [dbo].[Productos] ([id], [nombre], [precio], [fecha_creacion], [id_categoria]) VALUES (4, N'Zapatos', 0, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 0)
INSERT [dbo].[Productos] ([id], [nombre], [precio], [fecha_creacion], [id_categoria]) VALUES (5, N'r', 4, CAST(N'2025-03-05T05:00:00.0000000' AS DateTime2), 1)
INSERT [dbo].[Productos] ([id], [nombre], [precio], [fecha_creacion], [id_categoria]) VALUES (6, N'blusa2', 555, CAST(N'2025-03-07T05:00:00.0000000' AS DateTime2), 4)
SET IDENTITY_INSERT [dbo].[Productos] OFF
GO
