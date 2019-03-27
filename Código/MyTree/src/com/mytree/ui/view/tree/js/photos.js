﻿var photos = {
	a: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGnSURBVGhD7dnBbQJBDAVQk1o2QjlQwKYGzpSwKQfq4IxICRTB9jLZHCJFwWv7/7EiDt6zmX2yPYMHNq01eb7n5flI36JiIXWpbFW2kAwgsdVblS0kA0hs9db/ZWs+vW/Wno9PxPE3dhls6Od+HI1XT1d64Sb8R5utEulwdbA8VY+LZ/kqkfF456pBHxDz5Xxze/p2vsxukBbAshTVOE0PO4B2cUlWKrgUTKsrV0eut3RVU/cm5aKKqPXVbjuIDPtDUh2JImq1+jmjkupIFNFStXadHncWXkecpb3393me4oJZnionXyjLV6W4QFZEleHCWNG+0eKggQJiRVV6vhAXwoqrul0AC1H1uuIsTLUyukYH1jBL7WJ8lgq6oqwkVXSQDrLSVEFXjJWoirlCrFRVyBVhJasirgCr65tEv7a5A5jL0tcN7vNl9OVcHqtXRbocVr+Kc9k3H/3qPL69Ise7dh0SsS+2JmtFddgvdy/gGbY7Jdp2GRcyrlu1BfUjxtiPRm/lqVbGHOMHnU39zQm0I/UbBLA+GVosJHGVrcoWkgEktnoLydYXkF/LiXG21MwAAAAASUVORK5CYII=',
	b: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHFSURBVGhD7dk/bsIwFAZwp2dJOqCeIJwAunTqEcIYDsDYrUsYm61rJ5YmJyAnqDo03CW1XSIh4vi9l+o90eKsWOLnz3/4IqKu69TlPTeXRzKiwKKsS0grpEVJgDI27K2QFiUBytg/u7cO23n0i2dVU1Lqx7KnVS7tnIg6dtZx/kZHoEmxjE7TsDJJlpXhYMIsDXvaHuBDMJGVFq1u296nLVLn1zdv77BrIguer4rzfeekYVx8LCOP802GmMFwCC9LqWTmXkoAy81yff3dbQxFyM1qP5tzQjpLIBXzC1m9WpYD1eM9GBYfy/7CO1DFaw6rlIKuH/chB1fBPQBx3f14uPfWCU+b9qikxF72bUpokxirWSe00iW4iLbZIKuNKAtfuiayMEdqrELo0OZQuZnIwlwQpkKMXC/N+tn/5sHIsnRtq1wlotx5XdwsLVs8uFwfX74yKMDCLPj5mOtl1btBiwADZE/L1W20KvXXG07WSLexUUENVbTY9IsH3sacaY3uoGwDFRx5lk7qZQHteWlWVqFqlyDLbig4KBukBCur7LlCxXRc3Sj8nwjt85PPJRaRwOmHBhYltJBWSIuSAGVs2Fv/IK1vKZY5XO2KxFcAAAAASUVORK5CYII=',
	c: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHJSURBVGhD7ZnNccIwEIVxagEODBWYfkg70EbuIR1QAcMBuxfFjklixpLeeyuS8WF1ZaX99q1+dk0VQljMb7zMD6knciwlL66Wq6UooNj63nK1FAUU2/K99fFaxcfu2Cokj7bdU20azaFmne5PsoeFPCOE054FGtlpbCqWCelOVx8aVgQJq4RpQGPJeKxypoGMyiaLlYWaesqZM4pxWEkvWRfJw4rBGKzU8kw64gFBLgLLuPL3oYtOR1wYK07FKHUHi4oNuCCWKdjH62nExUaDsCyhsndmxg481e3723n60mzXS8Pzo0wBWM01QlVvVooLi62lsPl7sUBX3d4ulljL51jUKvcKV3AsKNHIIK/Wcr1VFnuerSWJl1tB78ChA6zVJtJInK8Nt7jdCmDFs6jK1R53VaX1Z+gBe+5TzdbN6KkOiRqQLQW6qC31GsSyLfubg0RYpfVWMlyqh7HW24RaIZVI1Pel2x+4BSisHFi09ct/oIBQ3T8Y6CT+/D7L9rWnEz7SJC9SQqneFa/WIFuRZiSTAcuMxiNZ1LJsNY3oy4OaxMkJSW841DnnDlvVo81vWOqtf4jCsRSRXS1XS1FAsfW95WopCii2n0mWgWSKWlxrAAAAAElFTkSuQmCC',
	d: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAG0SURBVGhD7ZkxkoJAEEWHPQsYWJ4AT4CbGO0RxlCSzQzNTCCUbNONNlk8gZzAMhDuwg5gGbg90D1FUwZN/Mt6vP4zOqNX17V6veft9ZAaIsGizEVsiS2KAUpWuiW2KAYo2b5uVenSc3mWaUVBgLIclS/ioHubzckVjwPrwZKtXNlYsVo+w0afKj+WITNTJc5zEqzWGUkZGStMSvOD1vLk2t7xIj7gVwAZq3dtRceGt0xCMJWt0KMcF6uj8bdnC1n2gxTGgdWSfYHKsj1uq2XCasB2UNGKa4nZYtmwlIrWEBdujoxYFq7LDfGNyYmlgjmwJFFjZMXyZwugSBhdrFiYcsMZwaK4E1tiq99AdbsAgcXMHxTH2q3yWvwHCOfBIBXrtZu7LE6s6vfbVRYj1ukQQ1Qf78PN4rs7rdJ9BlRI77YYKh5b5pYggFQpvY6G694kRl6J3bUFzKTC5BNJpZT9dGU9weBe+DnVe5J7phjZlpVY52dcq7pPmATLiDqixzcNVjM7kih2rLZNdCSuIeq8a7AbUWvLkz/uCBvLJCuRwHOPChbFmdgSWxQDlKx0S2xRDFCyf9oj0qBlLrhIAAAAAElFTkSuQmCC',
	e: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADQSURBVGhD7dmxEYJAEEZhz15sgg5sRFNKIbUR7cAmKOaQMTFw3HtHwqzvUv6B5WOBHSi11sP+1nF/Ja0VWRa5LmqpRQRI1t5Siwig7Oud2LLmaUC7/Rm+3KND2vJEW61/1xqmObqlvm6/nSM5eysS+tyullpEgGQz9tZzPBW6ro8WtYxaLefdl1GLuGXU6pkg4unBD0mkr9RSiwqQfMbnFjl/lt2k1TPYvAehaLzZVBYTIGnLUosIkGzxxx3g8k4EWP7mJFhqqYUESNjnVgKtBbLDv+u8aZrKAAAAAElFTkSuQmCC',
	f: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADASURBVGhD7dnBFYIwEEVRYy3aBFRAJS61FFhSCRVoE9BLhA7mAQsIb9Z/kVwmOcNJyjnfjlf34y1pWZHLIt9FLbWIAMnaW2oRAZI9c29NXZ2212uIe51ZK77LvZJqEcnitKp2nAduUH0T9ypOK771FUm1CJpal9b6fZ7BqaLuJiLlX7VaVIDki7u34hPE9/0gUp5EtagAyRd3EsnmcVYtQqaWWkSAZO0topV8TwRc9hbA8vWVYKmlFhIgYe8tovUHawlm05h3oYcAAAAASUVORK5CYII=',
	g: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHySURBVGhD7ZnNccJADIXt1GI4MFRgOgh3SoAj6SMXuKYE7kAFcQUMB+xeHHtCJrajvyc7DCS7V7S7n56ktTTEZVlG97ee7g+pJgpYSFyCWkEtRAHENuRWUAtRALH9o7l1XMXsmm0LRKGWbdVBOFa+SYEb000O3hGB9mV5WAJADVOIDcPyIn3RmdHsWFjcWEWXB0t8rFh9dQKjacJShKJCI7qhx9KAJUAp5/M7tVDqWJzfust1EnFkCpeG5Ty2mda0XzKXgsVIpcWgXWy0a+IZMhZNZQtfA63BZXRIxHK4aXmUDDZSB1Hsd9nPZzGdjHxfH2SXhJWfKarFPEEu8NkKWMXlRJw5Hd+A6n8M+8V2xneF3V9WRz7AQhDJ1PKlCrxLwBpNkA4Uvlnc8HgjRjKeEh6dLv65wa6opBYZxeyc2093W0pYuFzJ+p38ssC9rZhbtFy7/e+HUcRK5guiGLMbcMmVyHC9vAovoTufmhuVB4Lmit6epSd6CDC1+WHT1djRsWO4tF/r5YUpoRJF61PFSa4nFj++XKNFwFlG8N5YlWTwy6Mn2BBYqmQ6Rsui55zYrohBNNMSsr7SkPKdWrWkDSedtXgdWJ+UoG5mnqsGuFod8SQ+FOb76Dj8+woU6+M1zYBzg5sGtRBJg1pBLUQBxPYDyl4T+ok04fYAAAAASUVORK5CYII=',
	h: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADASURBVGhD7dnBCYMwAIVh4y4uUTdwEL12lHp1kLqBS5hdYnuqoKB/8RDwz1FeMHx5BtGQUiryG2V+S/quyGWRfVFLLSJAsnZLLSJAsnbrQq3Y12Ez6j6evMXYbWeHbjye7SYeG/0SaqlFBEjWbqlFBEjWbt1Ua3pWOy8Ge5eagRCtsnaLwKl1U63Ha/58Qzwz3i0h8klU608BMs1zSy0iQLJ2Sy0iQLJ2i2gFf3MCLrsFsPwpTLDUUgsJkHCm59YCRyU4ItqiqMYAAAAASUVORK5CYII=',
	i: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACXSURBVGhD7dmxDYMwAEVBzFoZiHmYJsuwiyPaoBSnNAg96odkHV80HnPO5X7Per8jnSfqWPJd0kpLBKRtW2mJgLRP3taxv8bl2d7C89U+WesPlh+vpiWmaaUlAtK2rbREQNq2lZYISNu20hIBadtWWiIgbdtKSwSkbVtpiYC0bUu0RveJwNW2AKvbV8FKKy0SkLj/lmh9AEi8CUmYaIm6AAAAAElFTkSuQmCC',
	j: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFDSURBVGhD7ZlBDoIwEEWLZ1EXhhPAfXTrUfAa7tUbcALiwnKXKooRw9TpH1kY87vlt/PyOg0pZCEE93tj9ntIHRGxkH2hLdpCDCBZ9hZtIQaQ7LS9ddpko1HuWgTokZ0WC68fmUEsRCVt0RZiAMmyt2gLMYBk2Vu0hRhAsuwt2kIMIFn2Fm0hBpBsem+1u7K/A5pufgiUfk98wSy2db90ffZykfbSYNWjac3WfJmP5zYX+aLsz0/ywZx8OcdZNSxxxXp/kLhEWcVqgVM5d/su/3H4qpCWXR9Hs+SkENRKdr8K1EyEy7m3gse17MRGlYAVolwJm2OkSsEKIaZC47JCpWzifZctYHaoZCyY7BumpJYfnokkaUXl1XOkBfSTKKwQoZuCp6+W8X+idnAHz00vH2B9Y5RYiDjaoi3EAJJlb/2BrSu/bmEFF0KhEwAAAABJRU5ErkJggg==',
	k: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAG+SURBVGhD7ZkxcsJADEXlnMW5BDkBXCKdXdpNOsp0NFDiLpewTxBfAu7iLDMZZgwr7UpazVBoW8T68f+Xdj1Uy7LA662310O6ETkWxxdXy9XiKMCp9Wy5WhwFOLVktqa2el7tlLl/9Nv/+6U2sYr89fSxGxD+ZlzOW/q3mWAFpvd+jj84g8nmqJ5aJZMBVggUZt7meEl5dxe4qIlEoALTb1dnNkvJ+xYRKCZTQRPxQPGZSmERgWpGjncFs0UEKm8YxAKnjDwRKDmT1kQ8UComFRYeKM6AQkaG0EQ8UKLGe4KTYFFHHsz9IfeKQQ3X8LKPrrHJHsurwpAs5ZKolWQddqn7VGoLEywALZgRlhZMi3WL0eW4iZkyfJ+uKbPQzzWRv0cbAYMwLWTZBzHWut2wphWCCbEiTysKJsFCFMCclFjJxyJmJQrGnq/aTly1Ut3t4+cCe4wVxQLYnpGIMcEKYwWwr/gU4w3+4lhQdz96sPJYEMCQiOUrZoFFOAmZJ5INFuHk3H9mHJVGWJSTOWBmWMSwCBfrlGKGWFTEUmCV/3HHuBOamsjgeCh1LI52rparxVGAU+vZcrU4CnBq/wA3QNuWm10wIAAAAABJRU5ErkJggg==',
	l: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACpSURBVGhD7dlBDkAwFEVR37LYD9thMyyGvRQjA5HmJgat3E690p6+mDRSSk15oy1vSdeKXBY5F7XUIgIka7fUIgIkW2+31jEeo593snmcrVcLb/WDCWoRRLXUIgIka7fUIgIka7fUIgIka7fUIgIka7fUIgIka7fUIgIoe95iZMYyoBe+hbtpy33pfm7liblaP9AK7xPBKVp5gOXtK8FSSy0kQML+t4jWAWUDV7zecs97AAAAAElFTkSuQmCC',
	m: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAISSURBVGhD7ZmxccJAFERPrkUQaKjgqIBRQqTUmdyIGyClBEUkDB2oAoYA1Is8kmUzdysd2v8VEBzxoVvtvr/zbZK2bc37fT7eT1KnKMpicoluRbcYB5izka3oFuMAczaytYxbl68k9Nkemhn3NIet6CniEOvq/FpXc67qGeLxiFiWmaPrcZOp0iw29e3xwonL6SjySrdvHU+X4K1yVRq3jAnrau5XoVc6t4y53qexF+OuX5pD2Itx52XZsrROMNPYA1jWul8NBkwWRJZt3MdN4QWqyqIgSCNlmXxfztEFuNssX3tvFFLJyjKrzMtiDHvA3RZ5SpjFF0Tqv/QY9oD7Zk2p4mWZnR8j6kLcsxXjlai3IEZ/HFEVGSErq88izQsPL3ccsd3ZCFlZv0kAXk7bY7uX+x0XoUxWGC/A3bJgif9jg3j9L4ULgCWWhTH+YY/LDA+WWBbGOCw5iPszQrA4ABzd8sOz8I5uHBF3tt6Hx0tlYUt044jLjChC4SSOt0RdfX77u7ugG3q/KLecUccY69r/O0fSDbwsh9GRGH2GhWCxbrnXYkv4soRg6WSNtISrSxwhyZbvRriJ5BEqZYXx8iN8HfrztalJhFoO3STtBuUk9l+fjlEBlhL5bvWClXBwVAMWK2tk4KdilHfDEiGaiZbQRWhMEn/mJBZ6XUEQF3FHoyzGr+hWdItxgDkb2WLc+gG+Kqhu8itSsQAAAABJRU5ErkJggg==',
	n: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFbSURBVGhD7dmxEYJAEAXQxVqsQivQyA7MIJTEzNDMRELJLELpgCroBSEw4g7Y3b8jMy7xnTw/fz1Hk7ZtaXnXanmkXuQsznPxtDwtTgKctd6t/0irypLhlVUz33xTbAe7pzdLu1Xup197Jjy0TMoiKq9Fo7jx+FY5i+r8aAZTsMgQpmL1sNvc7rMeuJLVVcyk+2qWTfcBLIuKIVgG3cew4N1HscDdl7HSNA3MO3AoZSw6nO+bEAx1IAlZtD49QzDUgSRlURyG+NyXs3rYxapiGhbR7vG2gelYcZiy+1pWBwsOpbL7epbJUAJYFkMJYY0N5Yv19e+7GMSKdz/PawEMxorCBCjwr4HhoZS4gGl1t4+clHwYlgWDoVnRoeQlhmdBum/Bih1IjMBsWOruG7G03Tdj6bpvyNJ0P/F/yH4/iQxBcKlpt+Q4Z3Gy87Q8LU4CnLXeLU+LkwBn7QfCx24OCm1cpgAAAABJRU5ErkJggg==',
	o: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAH6SURBVGhD7ZnNccJADIXt1AIcGCpwKuBGFaQd0gZ3SAdUwHDA7sXBniE4WHp6b53JcFifd7Wf3mr1A2XbtsXrfW+vh9QRZSzlXrJaWS1FAWVtjq2slqKAsnZibH19lM73/tkoHM9rb6Va/45b/shqV+sHFOKWelfxRIOV26N0kISliGTAC2g0VqpMv/FYMhJrok5DNoqMwsJQRkzjDQQYgeWfgR8ZuPYQLMRyjYemu6fnuRRljQjLsRuZfWQDzy3sVYBlU/FQHZ4DBrkwlk1FXd8we+pmIJZuzknlsiFUqpvr2crVm7VcftYbq4ier241R1j15TQGqJZzmaoo5kujlJ4utWcKYNlirRazBKzZYmXs8uWa2G8lEFJbVKy0O5RvEWCZoUX5On0RwDLDNPVE0Uf1EsHr0Yn9iFCx9LP7Hfar9o0BLPVR68R+skFq2Tlwf9Anreaw1zIzwrLlSokuO+BRZoZz0l/0NUmdDW5s0nq4J09TOsnE7rSge640zyIstxsvmBbVnzICt0Isf0y4JQRoHExlodYElteM3/PUWLZgAid0ZrDAYKWnUC4qSSz3lYtchFD9O6ax0DBKsoUR9cgsEtYENAFJVuvHG+lXJZFIv8RxoZqSBFDZK/PfnOTL6Jb9U3cqEPVLM5aiWFYrq6UooKzNsaWo9Q06FkD60FyAiQAAAABJRU5ErkJggg==',
	p: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGCSURBVGhD7ZkxcsIwEEVlzmIoGE5gTkDoadOZEu6RBko4QvrYJ8AnYFJg30WRwASYWZz9YlbDkHXLZ/T0diUkk1hrzfM9vedD8kSKhdRFbaktxACS1d76F7aa9TgJe8brBjF0nZXsrWrZ9/MJoZPEaqfv6VC0CFiezqFBZJGwjmTv/F6LhwWBBWJlq9qdH+mnXmX3FmD1+cVbnIFYXQs/XeysLXIywuUSwDryTDa0tOq75uxlUljGpNMZVcz9gVNGOSyTDkYcMWRGECuYSfaK0Rz2wWRytsqPZUVgjQYpA1YKq5y/banhs2GfQSVxTyzn7thAQ5lsNuXIMubuZn3+oGPT5sz7JpMXfw53CkgVkSLOi82EOZNoWO5XlA0V6x2EY9oteE110ilvy/cTxiSKdT77AKW7NF6gra7zVrvYYEOxbj7MVUfFAm09MCLrq4rF0tSG1JbaQgwgWe0ttYUYQLKJ/kMG6NKVCMiKcGhGaH6zWkREm9pSW4gBJKu99QK2fgAzW9R9SSIy/gAAAABJRU5ErkJggg==',
	q: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIDSURBVGhD7ZlBcsIwDEWdngVYMJwgPQE7TkGvQ7c9RVdwA07AsCDcxSWk7bhB+tI3mUymY69t6flLluWkijGG6Y2X6SG1RAWLiUtRq6jFKMDMLbk1olqHt0obr+9XBqQ393b58KPZ1X6X2z3vILBL9ls/UDKz3jWMJworE+mHjkBzY1FxUwX1kjmxntQpxXSlmgfLEEpQAO/CIZkDS/eB7YPdmGAmlgrlCkbuagtLsWtu97caaJrhXRlYMpUfqqVTwKARjCVTucKXFk/eDMTizSmVnDaEGpvr5STUxe1mTV8/6410ZZ0u6mWOsJrz8RGgXs5pqhDmS+FuP54bzRTAksVaLWYZWLPFSlily/VPutO8GNJRBGqJqZURwJwlAEtM0xwfGWvY3AKnh/euZwSLxfvuVpAZAbDYQ42I2WKD1GJrIOBiKzPCkuX6+DzQkWTFCoN2EPcbWegv5NYGdTYD9lt/nKc+M5q24bpTyXmrXE4XGC2s6OzG2Wek0UqaWFEHC/3scL8mza7bgaWFQX3DW3Qm1O1Xge+DheWJKBkOKDeWmrkED/OFxKlWp+l4mlFYA6OJpbcTgMa6r2LLAQi1XCnysMynfMuROtT2oeX/k1i+c/w96zE11aI6JlY//KBUjI2VHGl0/1Tl7ytResd6YhBI7dSCxQhW1CpqMQowcyeaW1/+Czc7w+PrWQAAAABJRU5ErkJggg==',
	r: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHESURBVGhD7Zk9eoMwDEBNz0I69MsJyAmgS6eu3WCkS7eO3bokI5wiE5wgPUGnJnchdqD/tiW5Fs0gr9EXnp9kIyXJMAzq/NbF+SEZIsGi5EVsiS2KAUqs1JbYohigxAK1ddiskr+sqqfAfMYyl3xbjJtabQ4kPmasd5aX+wUJbSYsg6fR0NJmxDqR3eGyOS+WAXvGnIIQrGy91z2tf+3XmaPG2y2CKwQLc6bSejc40DBcXFgGPa0fS9sWXt/A24ITS6n8xsoF6+bFgp/viODF6ret5bnLyxTi5cTqq8JGlV0tICq2gayvksQKpbLba1CWUqHXD7hhR0DZQVee+Zwzib/B9EXc5JgNzYlVdrsakb85h32TO5yok0x2W9MLlIDEjDUWNzpv30ouxNbPDqKzv2FMw/yfvXzeDM5uoSD1yh/GQmzZTrhuZBzSKL1ydCz9hXnjAMP3yhxYMcFiJXHaZyxjkbFiGYuOpcEeXOMFeh5jueXdpxI7j7FgeU9lW2CuWIYkjtXvLn4MGBuWF+wJGvkZsTxgYO2zYoWDMWN5wTw/kiTyxx1mtphi2JNIYPkSKlgUb2JLbFEMUGKltsQWxQAl9ghEKQHdLODgWQAAAABJRU5ErkJggg==',
	s: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAH1SURBVGhD7ZjNccIwEIXt1GI4MFRgOkgh5EgDKQKuKSF3SAVxBQwH7F4U/0Acxivte2tn4plIV9bS5/f2RyZ1ziXzW0/zQ2qIIhbjS1QrqsUowMTG3Prnan28pL61OVSMOMPYeiay67TFj9ye2N3b+IR7iiHq2Xk2BsvG1NGRZDBWuc9x66TIfF/izoBYo6EaUAIMw/LaJ50U8Bq2EsISDwq+u09dlAvBks5QDfGAgVzITCwvxSCH18ssXAHZ7lVqb+cr1GcRLOl8YPvFSqjd4lJCBQ0UrZzDqo3Azt4Qa27dXvm32BAsp3etqfEgLIBrzAAUrMSwnDPMwzEKoliOUuxnsZnocKxaaoNkxtKgsGoyPfu9bYmRjcVq09PMBo4e+nb6UDQWOhDMpNagoomkw6ycBqvn1BWEuKbGugMG8BAfrTcI7RqQ7T59DQW4fCS4Wn3+QDYEShaQS1OrOmxuX87Pb3eFivcjdJdLkmy51mSVf9ewxI1hrup6Hh6brxY6q3ZZ8+QuZKTcNwAPgY99b00pZKM+fpCUDzZL6d1DDyBagcNH75F6snQRkPf4PzbTgKFQoFptWRBzT9YOs68rQSS3+mI1o+E6WbAssrFEBrWI65aJ5nv/tDFyfksbPn9EHLEY4aNaUS1GASY25lZUi1GAif0C/1dfSSbiOWgAAAAASUVORK5CYII=',
	t: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACtSURBVGhD7dmxEYAgFARRsCwKoh6qoRmKQQyMnPGzGcGSco74ODUgzznTeeM6b0nPilwW2Re11CICJGu31CICJHtot9L6Vf+N0Qp5yp1s7cE91/ShWi5rZ4PfjFpEK3oTo5em1+/dShvRZdG8m0g2US21iADJ2i21iADJ2i21iADJ2i21iADJ2i21iADJ2i21iADJ2i2ilT1PBFx2C2B5+kqw1FILCZCw3y2idQO87csvgiBADQAAAABJRU5ErkJggg==',
	u: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFUSURBVGhD7ZnLDcIwEEQdagEOERWEfkg7oQ3uQAepAHEg6cUQPkLITnbGBATS+LxrP78dQCSZ99793pr8HlJHJCxmLrIlW4wBplbZki3GAFP7n9lq18ssWMt1i918X4bNWbkHmv/TFnCxj5TIFqNVtmSLMcDUKluyxRhgapUt2WIMMLXKlmwxBpjar2eryGcA39exACb7aeB0vsD2iVW1p0Nqc4qt+tikHof2WVizvAi3Opyg/6/NsQ57F/MpwGZhRadYb7YAV3SGWOKduzyXH1xNFdHl3GpnNe5WMSt233VfE8vHt78cOXRCz2VcUTXWdUCsfq7ORsjWR9RVo1SALe+HDgLi+ywBJwgNsZM6ChgOhWTrnoU3yeDx3Y6zI/+MaDIZ44nHunaQbKSlhwPG1stH28BLxHkckek1J/FlYv0mEluNWSosxqZsyRZjgKlVthhbZ9IFe6cRccTeAAAAAElFTkSuQmCC',
	v: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFwSURBVGhD7dnBEcIwDARAQlnQT2gnNJMUA70YzMADkCWdTg+YUb44ZnMWwoaptbb7vWv/e6QuKhayLpVWpYUkgIyt2qq0kASQsf9XW9fzcRKu04Y8dh+7nfB57juI0XVZDpJgXpV7hJfWGZ9lp71FikuexHg2ldUSXCFV01m8K6ayWKwrqDJZnCuqslmMS1Qdlov9STZqq08Qrvu4ypFW2EWoXKxYXozKx2pN7NRqlVAqLwt2cSo3C3SRKj8Lcokq5Cve0SBeXcZfX7QKSMtf97wKYjnXMUGFsVyuDBXIcrhSVCjLdOWoYJbhklSuLcPHpgJoEM87tT6RpcLT0vpEmirCGq5jnirEGrjm+ftYGamrXix4bfW75BPp9yk1qgqynK6wKspyuZAtA90gtD7xtoyEKpyWXV+MimAZ60ipGNboQPRYSU5FsRQXqeJYQxeralP9nwj85vp/vzQDD5c+tNJCIq20Ki0kAWRs1RaS1g0t/q5NLPCLegAAAABJRU5ErkJggg==',
	w: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAL7SURBVGhD7ZnBcQIxDEUhtUAOTCrYVMBwySklQDvkSgmccgE6oIJMDoFeCGt7d23rf2k9kwOT8Z4YsGTr61nWmuntdps83vP0eEtqV1SXVZKXqlZVq0SBkrGVrapWiQIlYytb/0qt02Yqn83JiPH68QrM2q9MUzTh68fVTTiwNV80cglfP34Ye66H/Zn8ZpmePnfS8uV55r+8t4HhuWzBuprtZRghPx3XfMm6KZxtfQxTRDtx9vwi5zh/XxSxYMTdeN308i1lbhbzYBwXiOI0Xn++tAxraUQBNe+rkMKkO52t3mUalZgVsNxqz/sDIxMG1IOVNc0wjbtPthtRHhL1eEh6ChPkW9oQwgxdDfdudT3D6W5BvCfTZIcPwovErOLeLQvjBbMfpVC8+YxPI6BjvRUlBuOFUrh+W0YA5Ef18g1UIhAzCLhZrGSJQVIj3ofakJdTn369zPWISLAcG4A3gZcJ1n0S0djAKiHkAmA5NgCbwhalMAErORO7zCK8ckQQWI4NENQI20meQvSyb+9GCJY/N0BQGV5ArKi8d+KAg9hMPgHLuzLwQtVOVjfUNFtpZGD5SHW80C5Ma4NzAnt5PY1gVbFjHS+Uwr5vGAoXXJa6Gynu/Z6RJ36PFzoa8l1I1ULgToJrBXdlL4fzfmQK6bUbKvbetcyC3EfA2levkSnkt4EIr9a1jnunl7R2WgOxQG3gSYT1p02jCZZfGIDzrjVqHBBYrQf6AgFbr0a0r6QbQ6VtK7sA0o/d+LLgmR31Hv4jfb0Z0yRya34HAauEWBZLAqqqwnhCrblauIPOXLMksA4pNefW2o0NfEFLHINjo//dVlv0DUaVDz+bjhW/7XZEr8NRVKQ28DNRKdexWJrfdhxswAcHHCzrzxXdsebXza5SoEutXXyQzj4ErOCu3rYYlcXZGpeUCh96tKHac7wMqXW1eJUwbpg6t6yqGlKbV7qMDxMsrxcxt6Se1n9f5eFDvzGTWODrD4fWZZWIWdWqapUoUDL2Qdn6BYye1LFp/ov1AAAAAElFTkSuQmCC',
	x: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGbSURBVGhD7ZjdkcMwCITtKyvpJ2knacYpJulFZ01+5i4jYHfxgx/QM4hPC0bIc2tt2t/62R9SJyosJi+lVqnFKMDYVm2VWowCjG3V1pZq3c7zcJ1vQJTH9Th0Pl4fkfc62PhrOY23OC2B4/1yGHoeLvcoZptCi9YksAzUOgICWM0KMZmK5aBArGaCjRPCH+NbHEit7kScX0r6fzAYCwbbAApO4vMsgGKbQJFY9kf5qrGNoGgsF8yCQhrVV80TtfX2tKIbjVuAEtTqcASYBCViwWAilIxlN/4/qZShdCy7W3y4wrvcufeEkv/sZt4xnSwDlVHL669JqByWp1airvp5E0kM2kQKTMYCelcCTMQCoHrdy2ASFgiVABOwCCgZjMayx4TFeOko3YLE8qf0/Az/btUUVhw2tkBeWlTfwkJiVhEcrBYeDre04UAsLpT5rcL3N4RlQpntMjvWA1g8lDdYY40/xpIPLjsCE0Rmb/MpEivmq5WCcp7h4R3uYWWh3PnVV2zuidzfqj/NTE5KrVKLUYCxrdoqtRgFGNtfoHEa4ecJafAAAAAASUVORK5CYII=',
	y: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFYSURBVGhD7ZjRFYIwDEXBsXAfXAeXgWFwFyxwRJSkzUv44OP11xBubkIt1NM0Vddbt+shzUTEQvpCW7SFGEBiOVu0hRhAYjlbp9gaHrW4HgOSPsXKie7PVzZPOtgoq2/lC9tev+bwy9g1UpZSjip3izCYEyodAfOVK2BNNxqMuaGKWJOSujKAySWV2reWW7CVIpxgMpShGiOWDpYpXK7FCmWxNdNrxhSwKJQVCwMT+2c3ZZutzyOnGDvcLjLp2+NdHvnvTmDZLU6BsjdxhSuByUZte8LPRojYyoAtd45PuquJWWNtf8KkB7DUVgp/ydjjt2sj2sSssT8wNxQ68ls92v66B3NMeqiJy8UlsAiU21YJLAYVwnIfLgxHNd/Ib4nFTSGqKmXnCxnyxkRbtIUYQGI5W7SFGEBiOVu0hRhAYuv5q831Fkce6Qlt0RZiAInlbNEWYgCJfQPggpcM/LSvoAAAAABJRU5ErkJggg==',
	z: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEMSURBVGhD7ZnBDYMwEARxekkT0A/5phRohnSQJqAXh6BIeSF77b2ThdbvkxjNrhCHQ4yxa+/c2kP6EgkLyUW2ZAsxgMyqW7KFGEBm1S0LW9s8BNJ5vNKACjHt6D8hWxew1e3f8gZnGc/cjEvO4yyw1qk/geqnNQdq33ryxoCpWlHHo9hYFCgyFiG9XyxEWyRR1BB5oohYZChOt5jpsbpFF8UI0UBUPZYVVE23bNKr7JadqPIQTUWVYtlDFXTLOL2ibnmIgkP0EQViOUJld8stPaRbrqIyQ/QWdWDVbNXv573sb8kwb4ldtgYLWZPBWWEhwmQLsRV0zQnoUrcAWboURmTJlmxBBpDhRt9bH1Z5LBJSr2x3AAAAAElFTkSuQmCC'
};
